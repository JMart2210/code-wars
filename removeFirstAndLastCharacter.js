// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    return str.split('').slice(1, -1).join('');
};
console.log(removeChar('eloquent'));

// forgot you can slice a string:
// return str.slice(1,-1);