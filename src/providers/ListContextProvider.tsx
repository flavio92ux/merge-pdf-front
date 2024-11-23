import { useState } from "react";
import { ListContextProviderProps } from "../interfaces/ListContextProviderProps";
import { ListContext } from "../contexts/ListContext";

export function ListContextProvider({ children }: ListContextProviderProps) {
  const [teste, setTest] = useState('Ola');

  return (
    <ListContext.Provider value={{ teste, setTest }}>{children}</ListContext.Provider>
  )
}