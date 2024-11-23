import { useState } from "react";
import { ContextProviderProps } from "../interfaces/ContextProviderProps";
import { ListContext } from "../contexts/ListContext";
import { IPdfItem } from "../interfaces/ListContextType";

export function ListContextProvider({ children }: ContextProviderProps) {
  const [listPdf, setListPdf] = useState<IPdfItem[]>([]);

  return (
    <ListContext.Provider value={{ listPdf, setListPdf }}>{children}</ListContext.Provider>
  )
}