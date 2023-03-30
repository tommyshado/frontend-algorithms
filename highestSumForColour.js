// Which colour’s sum of numbers is the highest. 
// Create a function called highestSumForColour that can find out.

function highestSumForColour(lst) {
  // create an empty dictionary
  const dict = {};
  // iterate over the length of the list
  for (let i = 0; i < lst.length; i++) {
    // grab the current object at i
    const currentObj = lst[i];
    // check if the current object color is not defined in the dictionary
    if (dict[currentObj.color] === undefined) {
      dict[currentObj.color] = 0;
    }
    dict[currentObj.color] += currentObj.number;
  }
  // create a variable for the max sum
  let max = 0;
  // iterate over the of the dictionary
  for (let key in dict) {
    // check if the current key value is greater than the max variable
    if (dict[key] > max) {
      // set the max to the key value
      max = dict[key];
    }
  }
  // return the max color
  return max;
}