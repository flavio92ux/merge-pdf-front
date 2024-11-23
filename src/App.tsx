import Header from './components/header/Header'
import InputPdf from './components/drop-form/InputPdf'
import DateFilter from './components/pdf-list/DateFilter'

function App() {

  return (
    <>
      <Header />
      <div className=''>
        <InputPdf />
        <DateFilter />
      </div>

    </>
  )
}

export default App
