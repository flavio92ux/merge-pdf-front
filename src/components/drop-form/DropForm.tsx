import {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function DropForm() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((files: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...files]);
  }, [])

  useEffect(() => {
    console.log(files)
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='flex justify-center items-center cursor-pointer'>
        <div className='absolute top-44 bg-white flex justify-center items-center w-[736px] h-[150px] rounded-lg'>
          <div className='flex items-center w-[688px] h-28 border-dashed border-2 border-blue-300 rounded-lg'>
            <p className='ml-4 font-sans font-normal text-sm leading-[19.6px] text-gray-50'>
              {files.length === 0 ? 'Selecione os PDf\'s' : files.length + ' PDf\'s selecionados'  }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropForm;