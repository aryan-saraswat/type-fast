import React, { useContext, useState } from "react";
import { InputWrapper } from "./Input.styled";
import { WordEntry } from "../../types";

interface InputProps {
  wordEntries: WordEntry[];
  setWordEntries: (words: WordEntry[]) => void;
}

function Input(inputProps: InputProps) {
  const [inputText, setInputText] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let enteredText = event.target.value;
    setInputText(enteredText);

    if (enteredText.endsWith(" ")) {
      checkEnteredWord(enteredText.trim());
      setInputText("");
    }
  }

  function onButtonClick() {}

  function checkEnteredWord(word: string) {
    const indexToCheck = inputProps.wordEntries.findIndex((wordEntry) => {
      return !wordEntry.guessed || !wordEntry.guessedCorrectly;
    });

    console.log("index to check: ", indexToCheck);

    if (word === inputProps.wordEntries[indexToCheck].word) {
      let updatedWordEntries = inputProps.wordEntries.map((wordEntry) => {
        if (word === wordEntry.word) {
          return { ...wordEntry, guessed: true, guessedCorrectly: true };
        }
        return wordEntry;
      });
      inputProps.setWordEntries(updatedWordEntries);
    } else if (word !== inputProps.wordEntries[indexToCheck].word) {
      inputProps.wordEntries[indexToCheck] = {
        ...inputProps.wordEntries[indexToCheck],
        guessed: true,
      };
      inputProps.setWordEntries(inputProps.wordEntries);
    }

    inputProps.wordEntries.map((entry) => {
      console.log("word: ", entry.word);
      console.log("guessed: ", entry.guessed);
    });
    console.log("");
    console.log("");
  }

  return (
    <InputWrapper>
      <div>
        <input
          value={inputText}
          inputMode="text"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button onClick={onButtonClick}>press</button>
        <p>{inputText}</p>
      </div>
    </InputWrapper>
  );
}

export default Input;
