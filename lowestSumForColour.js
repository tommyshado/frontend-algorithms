// Which colour’s sum of numbers is the lowest. Create a function called lowestSumForColour that can find out.

function lowestSumForColour(lst) {
    // create an empty dictionary
    let dict = {};
    // iterate over the length of the lst
    for (let i = 0; i < lst.length; i++) {
      // grab the current object
      const currentObj = lst[i];
      // check if current object color is in the dictionary
      if (dict[currentObj.color] === undefined) {
        // set the current object color to 0
        dict[currentObj.color] = 0
      }
      // otherwise, add the current object number to the current object color which has a value of zero
      dict[currentObj.color] += currentObj.number;
    }
    let min = 0;
    let lowestSumColor = '';
    
    for (let key in dict) {
      if (min === 0 || dict[key] < min) {
        min = dict[key];
        lowestSumColor = key;
      }
    }
    return lowestSumColor;
}