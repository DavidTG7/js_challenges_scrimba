/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector(".emoji-slots-game");
slotMachine.innerHTML = "";
const food =
  "https://apis.scrimba.com/emojihub/api/all/category/food-and-drink";

function makeFruitArray(arr) {
  return arr.map((item) => `<li>${item}</li>`);
}

function getRandomFruits(arr) {
  const fruitArr = arr.filter(item => item.group.includes("fruit"))
  let fruits = [];

  for (let i = 0; i < 9; i++) {
    fruits.push(fruitArr[Math.floor(Math.random() * fruitArr.length)].htmlCode);
  }
  return fruits;
}

let randomFruits = [];

// write your fetch request here

fetch(food)
  .then((response) => response.json())
  .then((data) => (randomFruits = getRandomFruits(data)))
  .then((res) => makeFruitArray(randomFruits))
  .then((res) => {
    res.forEach((item) => (slotMachine.innerHTML += item));
  });
