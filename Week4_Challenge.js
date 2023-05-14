function LongestWord(sen) { 
  
  sen = sen.replace(/[^\w\s]/g, '');
  let words = sen.split(' ');
  let longestWord = '';
  let longestWordLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
  }
  
  return longestWord; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));