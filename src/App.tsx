import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Timekeeper from "./components/Timekeeper/Timekeeper";
import WordsBox from "./components/WordsBox/WordsBox";
import generateWordList from "./services/WordListGenerator";
import { WordEntry } from "./types";

function App() {
  const [words, setWords] = useState<WordEntry[]>(generateWordList(5));

  const setWordsFunction = (words: WordEntry[]) => {
    const indexToCheck = words.findIndex((word) => {
      return !word.guessed || !word.guessedCorrectly;
    });

    if (indexToCheck < 0) {
      setWords(generateWordList(5));
    } else {
      setWords(words);
    }
  };

  return (
    <div className="App">
      <WordsBox
        wordEntries={words}
        setWordEntries={setWordsFunction}
      ></WordsBox>
      <Input wordEntries={words} setWordEntries={setWordsFunction}></Input>
      <Timekeeper></Timekeeper>
    </div>
  );
}

export default App;
