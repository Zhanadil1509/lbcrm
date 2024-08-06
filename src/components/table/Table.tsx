import { Table } from "flowbite-react";
import { PaginationUi } from "components/ui/pagination";
import { ButtonUi } from "components/ui/button";
import { FilterDropdownUi } from "components/ui/filterDropdown";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { IColumnsTable } from "../../types/components/table.types.ts";
import { useState } from "react";
import { columnsDataStatus } from "../../shared/constants/columns.ts";

export function TableComponent({
  columns,
  columnsData = [],
  totalPages = 0,
  dealLink,
  isUser,
  className,
  hasFilter = true,
}: IColumnsTable) {
  const [isOpen, setIsOpen] = useState(false);
  const getCurrentDate = (date: number | undefined) => {
    if (date) {
      return new Date(date).toDateString();
    } else {
      return "-";
    }
  };

  // @ts-ignore toDo fix later type
  const getObjectCell = (t, path: string) =>
    path.split(".").reduce((r, k) => r?.[k], t);
  return (
    <div className={className}>
      {hasFilter && (
        <ButtonUi
          WithIcon={RiFilter2Fill}
          title="Filter"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && <FilterDropdownUi isUser={isUser} dealLink={dealLink} />}
      <Table hoverable>
        {columnsData?.length === 0 ? (
          <div className="flex items-center justify-center">No data</div>
        ) : (
          <>
            <Table.Head>
              {Object.keys(columns).map((column, i) => (
                <Table.HeadCell key={i}>
                  {column === "link" ? (
                    <span className="sr-only">{column}</span>
                  ) : (
                    column
                  )}
                </Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y">
              {columnsData?.map((column, i) => {
                //delete column.requestData;
                return (
                  <Table.Row
                    key={i}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    {Object.keys(columns).map((col, i) =>
                      col === "link" ? (
                        <Table.Cell key={col + i}>
                          <Link
                            to={getObjectCell(column, columns[col]).toString()}
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          >
                            {column[columns[col]]}
                          </Link>
                        </Table.Cell>
                      ) : col === "status" ? (
                        <Table.Cell key={col + i}>
                          {columnsDataStatus[`${column.status}`]}
                        </Table.Cell>
                      ) : (
                        <Table.Cell key={col + i}>
                          {col === "total_deals" && column?.completed_requests
                            ? column?.completed_requests?.length
                            : col === "created_at"
                              ? getCurrentDate(Number(column?.createdAt))
                              : getObjectCell(column, columns[col])}
                        </Table.Cell>
                      ),
                    )}
                  </Table.Row>
                );
              })}
            </Table.Body>
          </>
        )}
      </Table>
      {totalPages > 10 && (
        <PaginationUi
          isUser={isUser}
          dealLink={dealLink}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
