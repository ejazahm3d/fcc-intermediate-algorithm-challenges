/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/
function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  let srcKeys = Object.keys(source);

  let newArray = collection.filter(item =>
    srcKeys.every(key => source[key] === item[key])
  );
  // Only change code above this line
  return newArray;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
