import React, { FC } from "react";
import { WordsBoxWrapper } from "./WordsBox.styled";
import generateWordList from "../../services/WordListGenerator";
import "./WordsBox.css";

interface WordsBoxProps {}

function WordsBox() {
  let words = generateWordList();
  return (
    <WordsBoxWrapper>
      {words.map((word) => (
        <div className="correctWord" key={word}>
          {word}
        </div>
      ))}
    </WordsBoxWrapper>
  );
}

export default WordsBox;
