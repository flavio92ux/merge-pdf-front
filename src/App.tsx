import Header from "./components/header/Header";
import InputPdf from "./components/drop-form/InputPdf";
import PdfList from "./components/pdf-list/PdfList";
import { ListContextProvider } from "./providers/ListContextProvider";
import { DropFormContextProvider } from "./providers/DropFormContextProvider";

function App() {
  return (
    <>
      <Header />
      <ListContextProvider>
        <DropFormContextProvider>
          <InputPdf />
          <PdfList />
        </DropFormContextProvider>
      </ListContextProvider>
    </>
  );
}

export default App;
