function sum(){
  let sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args){
  let sum = 0;
  for(i = 0; i < args.length; i++){
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function(){
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) =>{
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs){
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if(numbers.length === numArgs){
      let total = 0;
      numbers.forEach((n)=>{ total += n; });

      return total;
    }else{
      return _curriedSum;
    }
  };
  return _curriedSum;
}

Function.prototype.curry = function(numArgs){
  const args = [];
  const fn = this;

  function _curriedFn(arg){
    args.push(arg);
    if(args.length === numArgs){
      return fn(...args);
    }else{
      return _curriedFn;
    }
  }
  return _curriedFn;
};

Function.prototype.curry2 = function(numArgs){
  const args = [];
  let fn = this;
  function _curried(arg){
    args.push(arg);
    if(args.length === numArgs){
      return fn.apply(null, args);
    }else{
      return _curried;
    }
  }
  return _curried;
}
