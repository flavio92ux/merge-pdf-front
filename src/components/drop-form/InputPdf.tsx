import DragItem from "./DragItem";
import FormItem from "./FormItem";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { DropFormContext } from "../../contexts/DropFormContext";
import { uploadFiles } from "../../services/post-merge-pdf";

function InputPdf() {

  const { files, setFiles, refresh, setRefresh } = useContext(DropFormContext);

  const [fileName, setFileName] = useState('');

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (fileName.length > 1 && fileName.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [fileName])

  function handleClick() {
    uploadFiles(fileName, files).then(success => {
      if (success) {
        setRefresh(!refresh)
        setFiles([])
        setFileName('')
      }
    })
  }

  return (
    <div className="mb-[73px]">
      <DragItem files={files} setFiles={setFiles} />
      <div className="mt-40">
        <FormItem fileName={fileName} setFileName={setFileName} />
        <Button isDisabled={isDisabled} handleClick={handleClick}  />
      </div>

    </div>
  )
}

export default InputPdf;