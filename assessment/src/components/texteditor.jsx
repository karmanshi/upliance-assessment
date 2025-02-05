import React, { useEffect, useState } from "react";

const TexteditorComponent = (props) => {
  const [textData, setTextData] = useState("");

  useEffect(() => {
    const storedTextData=localStorage.getItem("text_editor_content")||"Start typing here....."
    setTextData(storedTextData)
  }, []);

  const handleTextInputChange = (e) => {
    setTextData(e.target.value);
    localStorage.setItem("text_editor_content", e.target.value)
  };

  return (
    <textarea
      className="p-4 w-full border border-2 rounded-md"
      cols={8}
      rows={8}
      onChange={handleTextInputChange}
      value={textData}
    >
    </textarea>
  );
};

export default TexteditorComponent;
