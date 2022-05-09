let returnedArr = [];

function checkLetters(firstWord, secondWord) {
  let word1 = firstWord.toLowerCase().split("").sort().join(""), word2 = secondWord.toLowerCase().split("").sort().join("");
  return (word1 === word2);
}

function compareWords(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  if (checkLetters(word1, word2)) {
      return true;
  }
}	

const solution = (sentence, wordsArr) => {
  /* your code here */
  let myArrayItems = sentence.split(' ');
  let sentenceLength = myArrayItems.length;
  let arrLength = wordsArr.length;
  for (let i = 0; i < arrLength; ++i) {
  	for (let j = 0; j < sentenceLength; ++j) {
    	if (compareWords(wordsArr[i], myArrayItems[j])) {
      	returnedArr.push(wordsArr[i]);
      }
    }
  }
  console.log(returnedArr);
  return returnedArr;
}

// test your solution
solution('dvvd pddp', ['ddvv', 'dvcd', 'vvdd', 'pdpd']);
// ['ddvv', 'vvdd', 'pddp']

solution('laser space', ['lazing', 'lazy', 'lacer']);
// []
solution('We will eat tenderising meat at Rivera with no regally plate because there is none',
  ['administration', 'ingredients', 'admit', 'beat', 'arrive', 'blood', 'door', 'each', 'on', 'economic', 'gallery', 'edge', 'three', 'drop']);
// ['ingredients', 'arrive', 'on', 'gallery', 'three']