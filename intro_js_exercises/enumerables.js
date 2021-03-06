"use strict";

Array.prototype.myEach = function(func){
  for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
  return this;
}
const NUMS = [1, 2, 3, 4, 5];
NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function(func){
  let mapArr = [];
  this.myEach(el => mapArr.push(func(el)));

  return mapArr;
}
console.log(NUMS.myMap( num => num * num ));

Array.prototype.myInject = function(func){
  let result = this[0];

  this.slice(1).myEach(element => result = func(result, element));

  return result;
}
console.log(NUMS.myInject((total, item) => total+ item));
