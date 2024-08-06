import useFilterDropdownStore from "store/useFilterDropdownStore.ts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetFiltered } from "api/filter/useGetFiltered.ts";

export type IDropdown = {
  dealLink: string;
  isUser?: boolean | undefined;
};

export const useFilterDropdown = ({ dealLink, isUser = false }: IDropdown) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { filterFormChange } = useFilterDropdownStore((state) => state);
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

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | number,
    whichEl: string,
  ) => {
    if (typeof e === "number") {
      searchParams.set(whichEl, e.toString());
      filterFormChange(e.toString(), whichEl);
    } else {
      searchParams.set(whichEl, e.target.value);
      filterFormChange(e.target.value, whichEl);
    }
  };

  const dateFrom = searchParams.get("from")
    ? new Date(Number(searchParams.get("from")) * 1000)
    : new Date();
  const dateTo = searchParams.get("to")
    ? new Date(Number(searchParams.get("to")) * 1000)
    : new Date();

  const onSubmit = async () => {
    if (isUser) {
      navigate(`/users/${dealLink}?${searchParams.toString()}`);
    } else navigate(`/${dealLink}?${searchParams.toString()}`);
    await refetch();
  };

  const onReset = async () => {
    if (isUser) {
      navigate(`/users/${dealLink}`);
    } else navigate(`/${dealLink}`);
    await searchParams.delete(searchParams.toString());
    await refetch();
  };

  return {
    onSubmit,
    onReset,
    handleChange,
    searchParams,
    dateFrom,
    dateTo,
  };
};
