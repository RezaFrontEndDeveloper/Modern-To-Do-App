import React, { useContext, useState, useEffect } from "react";

function Input() {
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" className="border border-gray-600" />
    </div>
  );
}

export default Input;
