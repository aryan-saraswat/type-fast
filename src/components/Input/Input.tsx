import React, { ChangeEvent, ComponentProps, FC, useState } from "react";
import { InputWrapper } from "./Input.styled";

interface InputProps {}

function Input() {
  const [inputText, setInputText] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let enteredText = event.target.value;
    setInputText(enteredText);

    if (enteredText.endsWith(" ")) {
      setInputText("");
    }
  }

  return (
    <InputWrapper>
      <div>
        <input
          value={inputText}
          inputMode="text"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <p>{inputText}</p>
      </div>
    </InputWrapper>
  );
}

export default Input;
