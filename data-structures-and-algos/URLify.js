"use strict"

// Write a method to replace all spaces in a string with
// '%20'. You may assume that the string has sufficient
// space at the end to hold the additional characters, and
// that you are given the "true" length of the string.

/** Function replaces blank spaces with '%20' in a string
 *  Takes in a string and the true length of the string
 *  Console logs the urlified string
 */
function urlify(str, length) {
  // Option 1: str.trim().split(' ').join('%20');
  // Option 2: str.replaceAll(' ', '%20'); 

  let numSpaces = 0;

  for (let i = 0; i < length; i++) {
    if (str[i] == ' ') numSpaces++;
  }

  let newLength = length + numSpaces * 2; // need +2 for '%20'
  let newStr = new Array(newLength);

  for (let i = length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      newStr[newLength - 1] = '0';
      newStr[newLength - 2] = '2';
      newStr[newLength - 3] = '%';
      newLength -= 3;
    } else {
      newStr[newLength - 1] = str[i];
      newLength--;
    }
  }

  let urlified = newStr.join('');
  console.log(urlified);
}

// Test Cases
let str1 = "Mr John Smith";
let str2 = "";
let str3 = "   ";
let str4 = "Mr John ";

let length1 = 13;
let length2 = 0;
let length3 = 3;
let length4 = 8;

urlify(str1, length1); // “Mr%20John%20Smith”
urlify(str2, length2); // “”
urlify(str3, length3); // “%20%20%20”
urlify(str4, length4); // “Mr%20John%20”