import DragItem from "./DragItem";
import FormItem from "./FormItem";
import Button from "../Button";
import { useContext } from "react";
import { DropFormContext } from "../../contexts/DropFormContext";

function InputPdf() {

  const { files, setFiles } = useContext(DropFormContext);

  return (
    <div className="mb-[73px]">
      <DragItem files={files} setFiles={setFiles} />
      <div className="mt-40">
        <FormItem />
        <Button />
      </div>

    </div>
  )
}

export default InputPdf;