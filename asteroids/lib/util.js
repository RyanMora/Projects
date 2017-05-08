const Util = {
  //normalize the length of the vector to 1, maintaining direction
  dir(vec){
    var norm = Util.norm(vec);
    return Util.scale(vec, 1/norm);
  },
  //find distance between two pos
  dist(pos1, pos2){
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] = pos2[1], 2)
    );
  },
  //find lenght of vector
  norm(vec){
    return Util.dist([0,0], vec);
  },
  //return a rondomly oriented vector
  randomVec(length){
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  //scale the length of a vector by the given amount
  scale(vec, m){
    return vec[vec[0] * m, vec[1] * m];
  },
  inherits(ChildClass, BaseClass){
    ChildClass.prototype = Object.create(BaseClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
  },
  wrap(coord, max){
    if(coord < 0){
      return max - (coord % max);
    }else if(coord > max){
      return coord % max;
    }else{
      return coord;
    }
  }
};

module.exports = Util;
