import React, { useContext, useState } from "react";
import { InputWrapper } from "./Input.styled";
import { WordEntry } from "../../types";

interface InputProps {
  wordEntries: WordEntry[];
  setWordEntries: (words: WordEntry[]) => void;
}

function Input(inputProps: InputProps) {
  const [score, setScore] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let enteredText = event.target.value;
    setInputText(enteredText);

    if (enteredText.endsWith(" ")) {
      checkEnteredWord(enteredText.trim());
      setInputText("");
    }
  }

  function onButtonClick() {
    console.log("words from input: ", inputProps.wordEntries);
  }

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
      setScore(score + 1);
    } else if (word !== inputProps.wordEntries[indexToCheck].word) {
      inputProps.wordEntries[indexToCheck] = {
        ...inputProps.wordEntries[indexToCheck],
        guessed: true,
      };
      inputProps.setWordEntries(inputProps.wordEntries);
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
        <button onClick={onButtonClick}>press</button>
        <p>{score}</p>
      </div>
    </InputWrapper>
  );
}

export default Input;
