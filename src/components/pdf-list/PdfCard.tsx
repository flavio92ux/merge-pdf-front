import calendarIcon from '../../assets/icon-calendar.svg';
import iconDoc from '../../assets/icon-doc.svg'

function PdfCard() {

  return (
    <div className="flex flex-col items-center justify-center mb-[17px]">
      <div className="flex items-center justify-between px-8 h-14 w-[720px] rounded-lg border border-gray-300 bg-gray-200">
        <div className='flex flex-row gap-x-11 font-sans font-normal text-sm text-blueGray-500'>
          <div className='flex flex-row gap-x-2 items-center'>
            <img src={calendarIcon} alt="calendar icon" />
            <p>22/08/2024 14:22</p>
          </div>

          <div className='flex flex-row gap-x-2 items-center'>
            <img src={iconDoc} alt="doc icon" />
            <p>Relatório Anual 2024</p>
          </div>
        </div>

        <a href="#">
          <div className='flex justify-center items-center bg-[#0078FF] rounded-lg'>
            <p className='flex justify-center items-center w-[127px] h-[23px] font-sans font-normal text-sm text-white'>
              Download
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default PdfCard;