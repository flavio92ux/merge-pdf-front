import DateFilter from "./DateFilter"
import PdfNotFound from "./PdfNotFound"
import PdfCard from "./PdfCard"
import { ListContext } from "../../contexts/ListContext"
import { useContext, useEffect } from "react"

function PdfList() {
  const { listPdf } = useContext(ListContext);

  useEffect(() => console.log(listPdf), []);

  return (
    <div>
      <DateFilter />

      {listPdf.length > 0 ? listPdf.map(pdfItem => <PdfCard pdfItem={pdfItem} />) : <PdfNotFound /> }
    
    </div>
  )
}

export default PdfList