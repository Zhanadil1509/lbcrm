import { useLocation } from "react-router-dom";

type IProps = {
  dealLink: string;
  isUser?: boolean | undefined;
};

import { Checkbox, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { ButtonUi } from "components/ui/button";
import { useFilterDropdown } from "components/ui/filterDropdown/useFilterDropdown.ts";

export function FilterDropdownUi({ dealLink, isUser }: IProps) {
  const { pathname } = useLocation();
  const isUsersQuery = pathname.indexOf("/users") !== -1;
  const { handleChange, onSubmit, onReset, searchParams, dateFrom, dateTo } =
    useFilterDropdown({
      dealLink,
      isUser,
    });

  return (
    <div className="z-10 absolute mt-2 lg:w-2/5 md:w-3/5 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="max-w">
        <div className="mb-2 block">
          <Label htmlFor="searchFilter" value="Поиск" />
        </div>
        <TextInput
          id="searchFilter"
          type="search"
          value={searchParams.get(isUsersQuery ? "query" : "search") ?? ""}
          icon={CiSearch}
          onChange={(e) => handleChange(e, isUsersQuery ? "query" : "search")}
          placeholder="Поиск"
        />
      </div>
      <div className="flex items-center justify-between mt-8 max-w gap-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="isOpen" className="flex">
            Открытые
          </Label>
          <Checkbox
            onChange={(e) => handleChange(e, "status")}
            id="isOpen"
            defaultChecked={false}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="block">
            <Label htmlFor="searchFilter" value="Вывод по:" />
          </div>
          <TextInput
            value={searchParams.get("limit") ?? ""}
            onChange={(e) => handleChange(e, "limit")}
            id="searchFilter"
            type="number"
            placeholder="Вывод"
          />
        </div>
      </div>
      <div className="mt-6 block">
        <Label htmlFor="searchFilter" value="Дата" />
      </div>
      <div className="flex items-center justify-between mt-3 max-w gap-4">
        <div className="flex items-center gap-2">
          <div className="block">
            <Label htmlFor="searchFilter" value="с:" />
          </div>
          <Datepicker
            onSelectedDateChanged={(e) =>
              handleChange(Math.floor(new Date(e).getTime() / 1000), "from")
            }
            value={dateFrom.toISOString().split("T")[0]}
            autoHide={false}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="block">
            <Label htmlFor="searchFilter" value="по:" />
          </div>
          <Datepicker
            value={dateTo.toISOString().split("T")[0]}
            onSelectedDateChanged={(e) =>
              handleChange(Math.floor(new Date(e).getTime() / 1000), "to")
            }
            autoHide={false}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 max-w gap-4">
        <div className="flex items-center gap-2">
          <div className="block">
            <Label htmlFor="searchFilter" value="Сортировать" />
          </div>
          <div className="max-w">
            <Select
              onChange={(e) => handleChange(e, "order")}
              defaultValue="asc"
              id="sortBy"
              required
            >
              <option value="asc">Новые</option>
              <option value="desc">Старые</option>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ButtonUi
            className="bg-gray-300 text-gray-700"
            title="Сбросить"
            onClick={() => onReset()}
          />
          <ButtonUi title="Применить" onClick={() => onSubmit()} />
        </div>
      </div>
    </div>
  );
}
