// Create word function
// Get the length of the word (random), place vowel followed by consonant
// Parameters such as consonant cluster, gemination etc. change the outcome

/// need to change number of sounds to number of syllables

const createWord = (
  maxSyllables,
  minSyllables,
  setMaxSyllables,
  lengthCluster,
  vowels,
  consonantCluster,
  consonants,
  gemination,
  consOnly,
  stressPattern
) => {
  if (maxSyllables < minSyllables) setMaxSyllables(minSyllables);
  // Prevent errors in word size

  // Select random number of syllables based on user input
  let numberSyllables = Math.floor(Math.random() * (maxSyllables - minSyllables + 1)) + minSyllables;
  let randomWord = "";
  let previousLetter = "";

  // Declare variable to check the state of the previous sound.
  // This will allow the function to avoid returning words with multiple vowels next to each other
  let previousSoundWasVowel = false;
  // Was the word stressed ?
  let wordStressed = false;

  for (let i = 0; i < numberSyllables; i++) {
    // Consonant cluster size is defined in the loop in order to be reset every time. This avoids the same clusters multiple times
    // in the same word.

    let consonantClusterSize = 1;
    if (lengthCluster()) consonantClusterSize = Math.floor(Math.random() * consonantCluster) + 1;

    // Stress pattern
    // Note: 1 syllable words will always be stressed at the beginning

    switch (stressPattern) {
      case "first-syl":
        if (!wordStressed || !wordStressed) {
          randomWord += "\u02C8"; // Unicode character for stress
          wordStressed = true;
        }
        break;
      case "second-syl":
        if ((!wordStressed && i === 1) || (!wordStressed && numberSyllables === 1)) {
          randomWord += "\u02C8";
          wordStressed = true;
        }
        break;
      case "penul-syl":
        if ((!wordStressed && i === numberSyllables - 2) || (!wordStressed && numberSyllables === 1)) {
          randomWord += "\u02C8";
          wordStressed = true;
        }
        break;
      case "last-syl":
        if ((!wordStressed && i === numberSyllables - 1) || (!wordStressed && numberSyllables === 1)) {
          randomWord += "\u02C8";
          wordStressed = true;
        }
        break;
      default:
    }

    let firstConsonantProb = Math.random();
    if (firstConsonantProb > 0.6 || previousSoundWasVowel) {
      randomWord += createConsonants(consonantClusterSize, consonants, gemination, previousLetter);
      previousSoundWasVowel = false;
    } else previousSoundWasVowel = true;

    // Declare random vowel for each iteration
    let rdmVowels = Math.floor(Math.random() * vowels.length);

    if (!consOnly) randomWord += vowels[rdmVowels];

    if (consOnly) {
      // If user chooses words with only consonants, then randomly create some (1/5words)
      let probNoVowel = Math.random();
      if (probNoVowel > 0.8) randomWord += vowels[rdmVowels];
    }

    // Second random number to randomize even more, but could use one random number for first and last consonants
    let lastConsonantProb = Math.random();
    if (lastConsonantProb > 0.8) {
      randomWord += createConsonants(consonantClusterSize, consonants, gemination, previousLetter);
      previousSoundWasVowel = false;
    } else previousSoundWasVowel = true;
  }

  return randomWord;
};

// Individual function to return consonant groups
const createConsonants = (consonantClusterSize, consonants, gemination, previousLetter) => {
  // Declare empty consonant that will be updated and returned
  let consonant = "";
  for (let j = 0; j < consonantClusterSize; j++) {
    // Declare random consonant for each iteration
    let rdmConsonants = Math.floor(Math.random() * consonants.length);

    // Gemination if true allows same letter multiple time, otherwise no
    if (gemination) consonant += consonants[rdmConsonants];
    if (!gemination) {
      while (consonants[rdmConsonants] === previousLetter) {
        rdmConsonants = Math.floor(Math.random() * consonants.length);
      }
      consonant += consonants[rdmConsonants];
    }
    previousLetter = consonants[rdmConsonants];
  }
  return consonant;
};

export default createWord;
