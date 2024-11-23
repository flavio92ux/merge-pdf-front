import Header from './components/header/Header'
import InputPdf from './components/drop-form/InputPdf'
import PdfList from './components/pdf-list/PdfList'
import { ListContextProvider } from './providers/ListContextProvider'

function App() {

  return (
    <>
      <Header />
      <InputPdf />
      <ListContextProvider>
        <PdfList />
      </ListContextProvider>
    </>
  )
}

export default App
