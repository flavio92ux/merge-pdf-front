import DateFilter from "./DateFilter";
import PdfNotFound from "./PdfNotFound";
import PdfCard from "./PdfCard";
import { ListContext } from "../../contexts/ListContext";
import { useContext, useEffect, useState } from "react";
import { getAllPdfs } from "../../services/get-all-pdf";

function PdfList() {
  const { listPdf, setListPdf } = useContext(ListContext);

  const [isFetched, setFetched] = useState(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPdfs();

        if (response.ok) {
          const data = await response.json();

          setListPdf(data);
          setFetched(true);
        }
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchData();
  }, [setListPdf]);

  return (
    <div>
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      {isFetched &&
        (listPdf.length > 0 ? (
          listPdf.map((pdfItem) => (
            <PdfCard key={pdfItem.id} pdfItem={pdfItem} />
          ))
        ) : (
          <PdfNotFound />
        ))}
    </div>
  );
}

export default PdfList;
