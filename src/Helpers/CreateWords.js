// Create word function
// Get the length of the word (random), place vowel followed by consonant
// Parameters such as consonant cluster, gemination etc. change the outcome

const createWord = (
  maxLetters,
  minLetters,
  setMaxLetters,
  lengthCluster,
  vowels,
  consonantCluster,
  consonants,
  gemination,
  consOnly
) => {
  if (maxLetters < minLetters) {
    setMaxLetters(minLetters);
  } // Prevent errors in word size
  let rdmLength =
    Math.floor(Math.random() * (maxLetters - minLetters + 1)) + minLetters;

  let randomWord = "";
  let previousLetter = "";

  // Randomize the first letter to be either vowel or consonant
  let firstLetterRdm = Math.floor(Math.random() * 2);
  // Words starting with consonants are shorter so they need to be adjusted to fit min/max letters
  let consonantAdjust = 0;

  if (firstLetterRdm === 1) consonantAdjust = 1;
  for (let i = 0; i < rdmLength + consonantAdjust; i++) {
    // Declare random vowel for each iteration
    let rdmVowels = Math.floor(Math.random() * vowels.length);
    // Consonant cluster size is defined in the loop in order to be reset every time. This avoids the same clusters multiple times
    // in the same word.
    let consonantClusterSize = 1;
    if (lengthCluster()) {
      consonantClusterSize = Math.floor(Math.random() * consonantCluster) + 1;
    }
    if (i === 0) i = firstLetterRdm;

    if (i % 2 === 0) {
      // let rdmVowels = Math.floor(Math.random() * vowels.length);
      randomWord += vowels[rdmVowels];
    } else {
      // random consonant cluster
      for (let j = 0; j < consonantClusterSize; j++) {
        // Declare random consonant for each iteration
        let rdmConsonants = Math.floor(Math.random() * consonants.length);

        // Gemination if true allows same letter multiple time, otherwise no
        if (gemination) randomWord += consonants[rdmConsonants];
        if (!gemination) {
          while (consonants[rdmConsonants] === previousLetter) {
            rdmConsonants = Math.floor(Math.random() * consonants.length);
          }
          randomWord += consonants[rdmConsonants];
        }
        previousLetter = consonants[rdmConsonants];
        // Prevent size of words to be bigger than max due to the loop for clusters
        if (consonantClusterSize > 1) i++;
      }
      // Prevent size of words to be bigger than max due to the loop for clusters + add vowels to avoid double cluster

      if (consonantClusterSize > 1) {
        if (i % 2 === 0) i++;
        if (!consOnly) {
          if (i > rdmLength + consonantAdjust && i < minLetters)
            randomWord += vowels[rdmVowels];
        }
      }
    }
  }
  return randomWord;
};

export default createWord;
