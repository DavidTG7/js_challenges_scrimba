/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

// Solution:

function isAnagram(str1, str2) {
  let result = true;
  const totalObjStr1 = str1.split("").reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

  const totalObjStr2 = str2.split("").reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

  str1.split("").forEach((item) => {
    if (totalObjStr1[item] != totalObjStr2[item]) {
      result = false;
    }
  });

  return result;
}

// Tests:

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("ape", "pea"));
console.log(isAnagram("bank", "kanb"));
console.log(isAnagram("lol", "lel"));
console.log(isAnagram("partial", "lapirta"));
