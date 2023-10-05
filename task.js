function findLongestWordWithMostVowels(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    let maxVowels = 0;
  
    for (const word of words) {
  
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      
      if (cleanedWord.length > longestWord.length) {
        longestWord = cleanedWord;
        maxVowels = countVowels(cleanedWord);
      } else if (cleanedWord.length === longestWord.length) {
        const vowelsCount = countVowels(cleanedWord);
        if (vowelsCount > maxVowels) {
          longestWord = cleanedWord;
          maxVowels = vowelsCount;
        }
      }
    }
  
    return longestWord;
  }
  
  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of word) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }