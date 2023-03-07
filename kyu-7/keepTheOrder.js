// https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
function keepOrder(ary, val) {
    for (let i = 0; i < ary.length; i++){
        if (val <= ary[i]) return i;
    }
    return ary.length;
}

// Some examples:
console.log(keepOrder([1, 2, 3, 4, 7], 5)) //=> 4
//                       ^(index 4)
 console.log(keepOrder([1, 2, 3, 4, 7], 0)) //=> 0
//           ^(index 0)
console.log(keepOrder([1, 1, 2, 2, 2], 2)) //=> 2
//                 ^(index 2)

function keepOrder(ary, val) {
    return ary.filter(a => a < val).length;
  }