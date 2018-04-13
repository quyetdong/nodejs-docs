// ////////////////// Convert a string to spinal case ////////////
// function spinalCase(str) {
//     const regEx = /[^a-z]+/g;

//     str = str.replace(regEx, match => '-' + match).toLowerCase();
//     str = str.replace(regEx, '-');

//     if(str[0] === '-') str = str.slice(1);

//     return str;
// }

// console.log(spinalCase('---This ***Is Spinal Tap'));

// ///////////////////////////////////////////////
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])|[_\s]+/g, '$1-$2').toLowerCase();
}

spinalCase('CuteTeletubbies_ Fine Say Eh-oh');
export { spinalCase };
