import pdfIcon from '../../assets/pdfNotFoundIcon.svg'
function PdfNotFound() {

  return (
    <div className="flex flex-col items-center justify-center h-[272px]">
      <img className="mb-4" src={pdfIcon} alt="Pdf Not found" />

      <div className="flex justify-center flex-col items-center font-sans text-sm leading-[19.6px]">
        <p className="font-bold">Nenhum merge encontrado</p>

        <p>Junte seus PDF`s em um único documento</p>
      </div>

    </div>
  )
}

export default PdfNotFound;