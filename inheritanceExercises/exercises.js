//inherit using surrogate class

Function.prototype.inherits = function(BaseClass){
  function Surrogate(){}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

//inherit using object.create

Function.prototype.inherits2 = function(BaseClass){
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

function Dog(name){
  this.name = name;
}

Dog.prototype.bark = function (){
  console.log(`${this.name} barks!`);
};

function Mutt(name){
  Dog.call(this, name);
}

Mutt.inherits2(Dog);

Mutt.prototype.trott = function(){
  console.log(`${this.name} trotts!`);
};

const whiskey = new Mutt("Whiskey");
whiskey.bark();
whiskey.trott();
