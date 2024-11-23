import DateFilter from "./DateFilter";
import PdfNotFound from "./PdfNotFound";
import PdfCard from "./PdfCard";
import { ListContext } from "../../contexts/ListContext";
import { useContext, useEffect, useState } from "react";
import { getAllPdfs } from "../../services/get-all-pdf";
import { IPdfItem } from "../../interfaces/ListContextType";

function PdfList() {
  const { listPdf, setListPdf } = useContext(ListContext);

  const [isFetched, setFetched] = useState(false);
  const [startDate, setStartDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date;
  });
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [listPdfFiltered, setListPdfFiltered] = useState<IPdfItem[]>([]);

  const [arraySize, setArraySize] = useState(0);

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

  useEffect(() => {
    const filtered = listPdf.filter((pdf) => {
      const createdAt = new Date(pdf.createdAt);
      return createdAt >= startDate && createdAt <= endDate;
    });

    setListPdfFiltered(filtered);
    setArraySize(filtered.length)
  }, [listPdf, startDate, endDate]);

  return (
    <div>
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        arraySize={arraySize}
      />

      {isFetched &&
        (listPdfFiltered.length > 0 ? (
          listPdfFiltered.map((pdfItem) => (
            <PdfCard key={pdfItem.id} pdfItem={pdfItem} />
          ))
        ) : (
          <PdfNotFound />
        ))}
    </div>
  );
}

export default PdfList;
