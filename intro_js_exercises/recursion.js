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
//rescursive
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
//iterative
function fibIter(n){
  if( n === 0 ){
    return [];
  }else if( n === 1 ){
    return [0];
  }else if( n === 2){
    return [0,1];
  }
  let fibs = [0,1]
  while(fibs.length != n){
    fibs.push(fibs[fibs.length-1]+fibs[fibs.length-2])
  }
  return fibs;
}
console.log(fibIter(5));
function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];
  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subproblem = bsearch(right, target);

    return subproblem === -1 ? -1 : subproblem + (probeIdx + 1);
  }
}
console.log(bsearch([1,2,3,4,5,6,7,8],5));

function makeChange(target, coins) {
  if (target === 0) {
    return [];
  }

  if (coins.every(el => el > target)) {
    return null;
  }

  let bestChange = null;

  function reverseSorter(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }

  coins.sort(reverseSorter).forEach((coin, index) => {
    if (coin > target) {
      return;
    }

    let remainder = target - coin;
    // remember the optimization where we don't try to use high coins
    // if we're already using a low one?
    let restChange = makeChange(remainder, coins.slice(index));

    if (!restChange) {
      return;
    }

    let change = [coin].concat(restChange);
    if (!bestChange || (change.length < bestChange.length)) {
      bestChange = change;
    }
  });

  return bestChange;
}

// merge, mergeSort
function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

console.log(mergeSort([4, 5, 2, 3, 1]));

// subsets
function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const firstElement = array[0];
  const subSubsets = subsets(array.slice(1));

  const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset) );

  return subSubsets.concat(newSubsets);
}

console.log(subsets([1, 3, 5]));
