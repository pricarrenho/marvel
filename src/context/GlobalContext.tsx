import { useDebounce } from "../hooks/useDebounce";
import { GlobalContextType, GlobalProviderProps } from "./types";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFilter: string = useDebounce(filterValue, 300);

  return (
    <GlobalContext.Provider
      value={{
        filterValue,
        setFilterValue,
        isLoading,
        setIsLoading,
        debouncedFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
