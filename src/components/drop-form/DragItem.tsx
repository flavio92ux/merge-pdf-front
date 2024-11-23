import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { DragItemProps } from '../../interfaces/DragItemProps';

const DragItem: React.FC<DragItemProps> = ({ files, setFiles} ) => {
  const onDrop = useCallback((newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, [setFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  })

  return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='flex justify-center items-center cursor-pointer'>
          <div className='absolute top-44 bg-white flex justify-center items-center w-[735px] h-[150px] rounded-lg'>
            <div className='flex items-center w-[688px] h-28 border-dashed border-2 border-blue-300 rounded-lg'>
              <p className='ml-4 font-sans font-normal text-sm leading-[19.6px] text-gray-50'>
                {files.length === 0 ? 'Selecione os PDf\'s' : files.length + ' PDf\'s selecionados'}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DragItem;