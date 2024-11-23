import {  useState } from "react";
import { DropFormContext } from "../contexts/DropFormContext";
import { ContextProviderProps } from "../interfaces/ContextProviderProps";

export function DropFormContextProvider({ children }: ContextProviderProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DropFormContext.Provider value={ { files, setFiles } }>{children}</DropFormContext.Provider>
  )
}