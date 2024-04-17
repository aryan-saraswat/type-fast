import React, { FC, useContext } from "react";
import { WordsBoxWrapper } from "./WordsBox.styled";
import generateWordList from "../../services/WordListGenerator";
import "./WordsBox.css";
import { WordEntry } from "../../types";

interface WordsBoxProps {
  wordEntries: WordEntry[];
  setWordEntries: (words: WordEntry[]) => void;
}

function WordsBox(wordsBoxProps: WordsBoxProps) {
  return (
    <WordsBoxWrapper>
      {wordsBoxProps.wordEntries?.map((wordEntry) => (
        <div
          className={
            wordEntry.guessed
              ? wordEntry.guessedCorrectly
                ? "correctWord"
                : "wrongWord"
              : "notGuessed"
          }
          key={wordEntry.word}
        >
          {wordEntry.word}
        </div>
      ))}
    </WordsBoxWrapper>
  );
}

export default WordsBox;
