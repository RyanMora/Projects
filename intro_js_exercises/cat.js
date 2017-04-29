"use strict";

function Cat (name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `Everyone loves ${this.name}`;
}

Cat.prototype.meow = function(){
  return 'meow!!!!!'
}

const cat1 = new Cat("silly Cat", "ryan");
const cat2 = new Cat("not silly cat", "not ryan");
console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

cat1.meow = function(){
  return "purrrrr!!!!";
}

console.log(cat1.meow());
console.log(cat2.meow());
