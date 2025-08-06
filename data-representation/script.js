// [1,2,3]  ==> 321
// [2,4,6,5] => 5642

const array = [2, 4, 6, 5, 5, 6, 8, 9];
console.log(digitTransform(array));

function digitTransform(num) {
  let j = 1;
  let number = 0;
  for (i = 0; i < num.length; i++) {
    number = number + num[i] * j;
    j = j * 10;
  }
  return number;
}


