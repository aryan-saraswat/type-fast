import wordList from "../assets/word-list";
import { WordEntry } from "../types";

function getRandomIndex() {
  return Math.floor(Math.random() * wordList.length);
}

function generateWordList(size: number = 20) {
  let randomWords: WordEntry[] = [];
  for (let i = 0; i < size; i++) {
    randomWords.push({
      word: wordList[getRandomIndex()],
      guessed: false,
      guessedCorrectly: false,
    });
  }
  return randomWords;
}

export default generateWordList;
