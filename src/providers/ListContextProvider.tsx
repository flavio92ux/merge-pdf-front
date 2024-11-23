import { useState } from "react";
import { ListContextProviderProps } from "../interfaces/ListContextProviderProps";
import { ListContext } from "../contexts/ListContext";
import { IPdfItem } from "../interfaces/ListContextType";

export function ListContextProvider({ children }: ListContextProviderProps) {
  const [listPdf, setListPdf] = useState<IPdfItem[]>([]);

  return (
    <ListContext.Provider value={{ listPdf, setListPdf }}>{children}</ListContext.Provider>
  )
}