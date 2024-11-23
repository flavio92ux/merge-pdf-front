import DateFilter from "./DateFilter"
import PdfNotFound from "./PdfNotFound"
import PdfCard from "./PdfCard"
import { ListContext } from "../../contexts/ListContext"
import { useContext, useEffect } from "react"

function PdfList() {
  const { teste } = useContext(ListContext);

  useEffect(() => console.log(teste), []);

  return (
    <div>
      <DateFilter />
      
      <PdfNotFound />

      <PdfCard />
      <PdfCard />
      <PdfCard />
      <PdfCard />
    </div>
  )
}

export default PdfList