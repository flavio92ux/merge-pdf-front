export interface DropFormContextType {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}