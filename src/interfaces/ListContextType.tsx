export interface IPdfCard {
  pdfItem: IPdfItem
}

export interface IPdfItem {
  id: string,
  name: string,
  link: string,
  createdAt: string
}

export interface ListContextType {
  listPdf: IPdfItem[];
  setListPdf(listPdf: IPdfItem[]): void;
}