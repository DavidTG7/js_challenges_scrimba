/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 15
}

function findTheWinner(obj) {
  let index = 0
  const myLength = Object.keys(obj).length
  const keys = Object.keys(obj)
  // console.log(values)
  for (let i = 1; i < myLength; i++) {
      if (obj[keys[i]] > obj[keys[i - 1]]) {
          index = i
      }
  }

  const result = `The winner is ${keys[index]} with ${obj[keys[index]]} votes!`

  return result
}

// Tests:

console.log(findTheWinner(gameNightFood));
console.log(findTheWinner({ "🐈 cats": 19, "🐕 dogs": 27 }));
