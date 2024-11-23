import DateFilter from "./DateFilter"
import NoPdfFound from "./NoPdfFound"
import PdfCard from "./PdfCard"

function PdfList() {
  return (
    <div>
      <DateFilter />

      <div className="bg-gray-200"></div>
      
      <NoPdfFound />

      <PdfCard />
    </div>
  )
}

export default PdfList