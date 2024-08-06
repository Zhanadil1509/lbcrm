/*
type Props = {

};
*/

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { useGetFiltered } from "../../../api/filter/useGetFiltered.ts";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type IProps = {
  totalPages: number;
  dealLink: string;
  isUser?: boolean | undefined;
};

export function PaginationUi({ totalPages, dealLink, isUser = false }: IProps) {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { refetch } = useGetFiltered({
    dealLink:
      dealLink === "users"
        ? dealLink
        : isUser
          ? `users/requests/${dealLink}`
          : `deals/${dealLink}/all`,
    queries: searchParams.toString(),
    enabled: false,
  });

  const onSubmit = (page: number) => {
    setCurrentPage(page);
    searchParams.set("page", page.toString());
    refetch();
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <div className="flex overflow-x-auto sm:justify-end items-center">
      <div className="flex-1">
        Pages {currentPage} of {totalPages}
      </div>
      <Pagination
        currentPage={Number(searchParams.get("page")) ?? currentPage}
        totalPages={totalPages}
        onPageChange={onSubmit}
      />
    </div>
  );
}
