import { WordEntry } from "../../types";
import "./WordsBox.css";
import { WordsBoxWrapper } from "./WordsBox.styled";

interface WordsBoxProps {
  wordEntries: WordEntry[];
  setWordEntries: (words: WordEntry[]) => void;
}

function WordsBox(wordsBoxProps: WordsBoxProps) {
  return (
    <WordsBoxWrapper>
      <div className="container">
        {wordsBoxProps.wordEntries?.map((wordEntry) => (
          <div
            className="child"
            style={{ color: wordEntry.guessedCorrectly ? "green" : "red" }}
            key={wordEntry.word}
          >
            {wordEntry.word}
          </div>
        ))}
      </div>
    </WordsBoxWrapper>
  );
}

export default WordsBox;
