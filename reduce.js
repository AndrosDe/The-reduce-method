  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);
console.log("");

// Expanded version:
console.log("Expanded version:");
let sumEx = nums.reduce((acc, curr) => {
  console.log(
    "Accoumulator:", acc,
    "current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr
});
console.log(sumEx);
console.log("");

// Expanded version with initial Value:
console.log("Expanded version with initial Value (0):");
let sumIni1 = nums.reduce((acc, curr) => {
  console.log(
    "Accoumulator:", acc,
    "current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr
}, 0);
console.log(sumIni1);
console.log("");

console.log("Expanded version with initial Value (10):");
let sumIni2 = nums.reduce((acc, curr) => {
  console.log(
    "Accoumulator:", acc,
    "current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr
}, 10);
console.log(sumIni2);
console.log("");

console.log("One-line version with initial Value (0):");
let sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);
console.log("");


// Complex version:
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalyrsExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalyrsExperience);
console.log("");

// Grouping by a property, and totaling it too
let experianceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(experianceByProfession);