//Create a function that

//need to make text lowercase. .replace will return a new string pattern
function parseText(text) {
  let updText = text.toLowerCase().replace(/[^a-z\s]/ig, "").split(" ");
//   console.log(updText);
  return updText;
}

function genWords(corpus) {
  //create an empty object to be able to push into it
  let wordPairs = {};
  //need to get the words in corpus
  let words = parseText(corpus);

  //need to loop through everyword

  for (let i = 0; i < words.length - 1; i++) {
    let newWord = words[i];
    let secondWord = words[i + 1];

    //create an if statement to push into wordPairs

    if (wordPairs[newWord]) {
      wordPairs[newWord].push(secondWord);
    }else{
        wordPairs[newWord]=[secondWord]
    }
  }
  return wordPairs
}

//create function that randomly choses the subsequent word

//will need to use math.floor and math.random
function randomChoice (wordArray){
    let index = Math.floor (wordArray.length * Math.random())
    return wordArray [index]
}

//create a writeLine function that will
//needs to accept two parameters - a word corpus and a number of lines 

function writeLine (corpus, minimumLength ){
    let words = parseText(corpus)
    let wordPairs = genWords (corpus)
    let word = randomChoice (words)
    let phrase = [word]

    while (wordPairs[word]){
        let nextWord = wordPairs[word]
        word = randomChoice(nextWord)
        phrase.push(word)

        if (phrase.length> minimumLength){
            break
        }
    }
    return phrase.join (' ')

}

//generate the poem

function generatePoem (corpus, lines){
    for(let i=0; i< lines; i ++){
        let floorRandom = Math.floor(Math.random()*10)+1
        console.log(writeLine (corpus, floorRandom));
    }
}

let newText = parseText("WHY IS THIS NOT CHANGING blah");
console.log(newText);


let text = "Ever since I left the city, you, you, you You and me we just don't get along";

let wordPairs = genWords(text);
console.log(wordPairs);