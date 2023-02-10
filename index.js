const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  // Your code goes here
  let firstPoem = await readFile("poems/starting-poem.txt", "utf-8");
  let firstPoemWord = mostFrequentWord(firstPoem);
  console.log(firstPoemWord);
  let secondPoem = await readFile("poems/happy.txt", "utf-8");
  let secondPoemWord = mostFrequentWord(secondPoem);
  console.log(secondPoemWord);
  let thirdPoem = await readFile("poems/you.txt", "utf-8");
  let thirdPoemWord = mostFrequentWord(thirdPoem);
  console.log(thirdPoemWord);
};

findPassword();
