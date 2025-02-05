import React, { useState } from 'react'

const TexteditorComponent = (props) => {
  const [textData, setTextData]=useState("Start typing here.....")
  return (
    <textarea className="p-4 w-full border border-2 rounded-md" cols={8} rows={8} onChange={(e)=>setTextData(e.target.value)}>{textData}</textarea>
  )
}

export default TexteditorComponent