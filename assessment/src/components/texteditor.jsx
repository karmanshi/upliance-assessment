import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css"
import Button from "./common/button";
const TexteditorComponent = () => {
  const [textData, setTextData] = useState(
    localStorage.getItem("text_editor_content") || ""
  );

  useEffect(() => {
    localStorage.setItem("text_editor_content", textData);
  }, [textData]);

  //Quill editor toolbar configuration
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-black font-bold text-2xl text-center">
        Rich Text Editor
      </h1>
      <ReactQuill
        theme="snow"
        value={textData}
        onChange={setTextData}
        modules={{ toolbar: toolbarOptions }}
      />
      <Button
        onClick={() => alert("Data saved successfully")}
        extra_css="bg-blue-400 hover:bg-blue-600"
        text="Save"
      />
    </div>
  );
};

export default TexteditorComponent;
