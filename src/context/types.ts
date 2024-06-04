import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  filterValue: string;
  setFilterValue: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  debouncedFilter: string;
};
