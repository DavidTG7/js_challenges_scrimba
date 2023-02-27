/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
  "moz biblical torchbearers",
  "it's razorbill beachcomber",
  "och mcrobbie trailblazers",
  "bib chorizo cellarmaster",
  "thor scribble carbimazole",
  "zilla borscht abercrombie",
  "brazil scorcher batmobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];

// Solution a lot improved:

// function sortPhrase(phrase) {
//   return phrase.toLowerCase().split("").sort().join("").trim();
// }

// function isAnagramInArray(anagram, arr) {
//   return arr.filter((item) => {
//     const word1 = sortPhrase(anagram);
//     const word2 = sortPhrase(item);

//     return word1 === word2;
//   });
// }

function isAnagramInArray(anagram, arr) {
  const anagramChars = anagram
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item] += 1;
      }
      return obj;
    }, {});

  let result = [];

  arr.forEach((item) => {
    const itemChars = item
      .replaceAll(" ", "")
      .toLowerCase()
      .split("")
      .reduce((obj, item) => {
        if (!obj[item]) {
          obj[item] = 1;
        } else {
          obj[item] += 1;
        }
        return obj;
      }, {});

    let validator = true;

    for (let actualItem in itemChars) {
      if (itemChars[actualItem] === anagramChars[actualItem]) {
        continue;
      } else {
        validator = false;
        break;
      }
    }
    if (validator) result.push(item);
  });

  return result;
}

//Tests:

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));

console.log(
  isAnagramInArray("treat", [
    "tater",
    "tree",
    "teart",
    "tetra",
    "heart",
    "hamster",
  ])
);
