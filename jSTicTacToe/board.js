class Board{
  constructor(){
    this.grid = Board.makeGrid();
  }

  static isValidPos(pos){
    return (0 <= pos[0]) && (pos[0] < 3) && (0 <= pos[1]) && (pos[1] < 3)
  }

  static makeGrid(){
    const grid = [];

    for (let i = 0; i < 3; i++){
      grid.push([]);
      for (let j = 0; j < 3; j++){
        grid[i].push(null);
      }
    }
    return grid;
  }

}
