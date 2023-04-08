import { useDebounce } from "../hooks/useDebounce";
import { GlobalContextType, GlobalProviderProps } from "./types";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [filterValue, setFilterValue] = useState("");

  const debouncedFilter: string = useDebounce(filterValue, 1000);

  return (
    <GlobalContext.Provider
      value={{
        filterValue,
        setFilterValue,
        debouncedFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
