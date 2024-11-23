import DateFilter from "./DateFilter"
import NoPdfFound from "./NoPdfFound"

function PdfList() {
  return (
    <div>
      <DateFilter />

      <div className="bg-gray-200"></div>
      
      <NoPdfFound />
    </div>
  )
}

export default PdfList