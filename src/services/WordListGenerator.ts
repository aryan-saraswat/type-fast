import wordList from "../assets/word-list";

function getRandomIndex() {
  return Math.floor(Math.random() * wordList.length);
}

function generateWordList(size: number = 20) {
  let randomWords: string[] = [];
  for (let i = 0; i < size; i++) {
    randomWords[i] = wordList[getRandomIndex()];
  }
  return randomWords;
}

export default generateWordList;
