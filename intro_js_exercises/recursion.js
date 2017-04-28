"use strict";

// range
function range(start, end) {
  if (start === end){
    return [];
  }

  let r = range(start, end-1)
  r.push(end-1);
  return r;
};

console.log(`range(3, 10) = ${range(3, 10)}`);

//iterative

function sumArr(arr){
  let sum = 0
  arr.forEach(el =>{
    sum += el;
  })
  return sum;
}
console.log(sumArr([1,2,3,4]));

//rescursive
function sumArrRec(arr){
  if (arr.length === 0){
    return 0;
  }
  let lastNum = arr[arr.length-1];
  return lastNum += sumArrRec(arr.slice(0, arr.length-1));
}

console.log(sumArrRec([1,2,3,4,5]));

function exponent1(base, exp){
  if(exp === 0){
    return 1;
  }else{
    return exponent1(base, exp-1) * base;
  }
}
console.log(exponent1(2,4));

function exponent2(base, exp){
  if (exp === 0) {
    return 1;
  }
  if (exp % 2 === 0) {
    let subAnswer = exponent2(base, exp / 2);
    return subAnswer * subAnswer;
  } else {
    let subAnswer = exponent2(base, ((exp - 1) / 2));
    return subAnswer * subAnswer * base;
  }
}
console.log(exponent2(2,4));

function fibRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibs = fibRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
  }
}
console.log(fibRec(5));
