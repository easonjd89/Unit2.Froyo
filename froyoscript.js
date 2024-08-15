/* Script to support frozen yogurt assignment
 */

// Pseudocode Steps

// Prompt user to enter a list of yogurt flavors separated by commas.
// Parse user input into a string and then into substrings
// Display a table of how many of each flavor the user has ordered
// (This will require looping through the array of objects )

const flavors = prompt(`Enter your list of flavors with commas in between.`);

let flavorStr = flavors.split(",");
console.log(`Flavors: ---> ${flavors}`);
const flavArray = flavors.split(",");
console.log(flavArray);

const flavorCounts = {};

/* If the flavor is not in the flavorCounts, 
add it to the array and increment count by 1
if it is in the array, increment value by 1 
*/

for (let i = 0; i < flavArray.length; i++) {
  const flavor = flavArray[i];
  // let flavorCount = 0;
  if (flavor in flavorCounts) {
    flavorCounts[flavor] += 1;
  } else {
    flavorCounts[flavor] = 1;
    // flavorCount++;
  }
}
// Thanks for the tip on console.table !

console.table(flavorCounts);
