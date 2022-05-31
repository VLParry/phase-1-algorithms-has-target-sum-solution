function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
  }
  return false
}

// function hasTargetSum(array, target){
//   const seenNumbers = {};
  
//   for (const number of array){
//     if (complement in seenNumbers) return true;
//     seenNumbers[number] = true;
//   }
  // second soluton:::
//   // (let i = 0; i < array.length; i++){
//   //   const complement = target - array [i];
//   //   if (seenNumbers[complement]) return true
//   //   seenNumbers[array[i]] = true
//   // }
//   return false
// }

/* 
  Write the Big O time complexity of your function here
runtime: 0(n)


  runtime: O(n^2)
  space: O(n)
*/

/* 
  Add your pseudocode here
create an object to keep track of numbers weve already seen.

iterate through each number in the array
for the current number, identify a complement that adds to the target(comp = target - num)

check if any key on our object is the complement
if so, return true
otherwise, add that number to the object





iterate throiugh the rest of the array and check if any number is our complement.
if so, return true.

if I reach the end of the array, return false.



~~~
  make a function called hasTargetSum that checks if 2 numbers from the array add up to some target. For example, if I have an array [1,2,3,4] and the target is 6 I should return true because 2 and 4 add up to 6. For each number, check if there is another number that adds to the target. 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
