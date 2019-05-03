/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\W|_/g, "-")
    .toLowerCase();
  console.log(newStr);
  return newStr;
}

spinalCase("The_Andy_Griffith_Show");
spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
