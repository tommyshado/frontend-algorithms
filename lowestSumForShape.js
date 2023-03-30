// Which shape’s sum of numbers is the lowest? Create a function called lowestSumForShape that can find out.

function lowestSumForShape(lst) {
    // create an empty dictionary
    let dict = {};
    // iterate over the length of the lst
    for (let i = 0; i < lst.length; i++) {
      // grab the current object
      const currentObj = lst[i];
      // check if current object color is in the dictionary
      if (dict[currentObj.type] === undefined) {
        // set the current object color to 0
        dict[currentObj.type] = 0
      }
      // otherwise, add the current object number to the current object color which has a value of zero
      dict[currentObj.type] += currentObj.number;
    }
    // create a variable for the min
    let min = 0;
    // create an empty string variable for the sum of shape with the lowest sum
    let lowestShapeSum = '';
    // iterate over the length of dictionary
    for (let key in dict) {
      // check if the min variable === zero, for the next iteration we will for the
      // key value pair if it is less than the min variable, and so on until the last key
      if (min === 0 || dict[key] < min) {
        // set the min variable to the current object value
        min = dict[key];
        // now set the lowestShapeSum var to the key which is the shape
        lowestShapeSum = key;
      }
    }
    // return the lowest shape sum
    return lowestShapeSum;
  }