// step 1 make a gameboard! The gameboard is an object represent by an array!

function gameBoard() {
  const board = [];
  return { board };
}

// congratz you have an empty board!

//  step 2 create the players! who is gonna play the game silly? they are also objects!

function createPLayer(name, marker) {
  return { name: name, marker };
}

const player1 = createPLayer("Steve", "X");
const player2 = createPLayer("Anna", "O");

console.log(player1.marker);
