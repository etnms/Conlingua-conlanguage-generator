const removeStressExamples = (word) => {
  if (word === undefined) return; // Avoid errors due to undefined 
  if (word.includes("\u02C8")) {
    const newWord = word.replace("\u02C8", "");
    return newWord;
  }
};

export default removeStressExamples;
