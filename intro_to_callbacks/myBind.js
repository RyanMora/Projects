//mybind with no args

Function.prototype.myBind = function(context){
  return () => this.apply(context);
}

//mybind with args

Function.prototype.myBind = function(context, ...bindArgs){
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name){
    this.name = name;
  }
  meow(){
    console.log(`${this.name} says meow!`);
  }
}

const poop = new Cat("Poop");
setTimeout(poop.meow.myBind(poop), 1000);
