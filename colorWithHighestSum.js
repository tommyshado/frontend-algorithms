// Write a function called colorWithHighestSum that returns the colour with the highest sum of numbers.

function colorWithHighestSum(lst) {
    // create an empty dictionary
    let dict = {};
    // loop over the length of the lst
    for (let i = 0; i < lst.length; i++) {
      // grab the current object
      const currentObj = lst[i];
      // check if the type of the current object is defined in the dictionary
      if (dict[currentObj.color] === undefined) {
        // if not defined set the key value to 0
        dict[currentObj.color] = 0;
      }
      // otherwise, increment by the current object number to form a sum
      dict[currentObj.color] += currentObj.number;
    }
    // create a variable for the max sum
    let max = 0;
    // create a string variable for the max color
    let maxColor = '';
    // iterate over the of the dictionary
    for (let key in dict) {
      // check if the current key value is greater than the max variable
      if (dict[key] > max) {
        // set the max to the key value
        max = dict[key];
        // set the max color var to the key, which is a color
        maxColor = key;
      }
    }
    // return the max color
    return maxColor;
}