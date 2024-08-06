import { create } from "zustand";

type FilterForm = {
  search: string;
  isOpen: boolean;
  conclusionBy: number | null;
  dateFrom: string | null;
  dateTo: string | null;
  sortBy: string | null;
  limit: string | null;
};

interface FilterState {
  filter: FilterForm;
  filterFormChange: (value: string, whichEl: string) => void;
}

export const useFilterDropdownStore = create<FilterState>()((set) => ({
  filter: {
    search: "",
    isOpen: false,
    conclusionBy: null,
    dateFrom: null,
    dateTo: null,
    sortBy: null,
    limit: null,
  },
  filterFormChange: (value: string, whichEl: string) =>
    set((state) => ({ filter: { ...state.filter, [whichEl]: value } })),
}));

export default useFilterDropdownStore;
