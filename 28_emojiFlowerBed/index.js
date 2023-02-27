/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

const api =
  "https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature";
const flowerBed = document.querySelector(".emoji-flower-bed");

// May solution part 1:
function clearTheGarden(arr) {
  return arr.filter(
    (item) => item.group === "animal bug" || item.group === "plant flower"
  );
}

fetch(api)
  .then((response) => response.json())
  // My solution part 2:
  .then((result) => clearTheGarden(result)) // End of my solution.
  .then((data) => {
    data.forEach((emoji) => {
      flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
    });
  })
  .catch((err) => console.log(err));
