const conway = function(board) {
  // assumes rectangular board
  // nextBoard = board.map(row => {
  //   nextRow = row.map(cell => {
  //     liveNeighbors = countLiveNeighbors(board, r, c);
  //     console.log(cell);
  //     return nextCell;
  //   });
  //   return nextRow;
  // });
  nextBoard = [...board];
  numRows = nextBoard.length;
  numCols = nextBoard[0].length;
  // for each cell
  for (r = 0; r < numRows; r++) {
    for (c = 0; c < numCols; c++) {
      // get live neighbor count
      liveNeighbors = countLiveNeighbors(board, r, c);
      // determine if cell lives or dies, populate nextBoard with update
      // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
      cell = board[r][c];
      if (cell === 1) {
        // Any live cell with fewer than two live neighbours dies
        // Any live cell with two or three live neighbours lives on to the next generation.
        // Any live cell with more than three live neighbours dies
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          nextBoard[r][c] = 0;
        }
      } else {
        // Any dead cell with three live neighbours becomes a live cell
        if (liveNeighbors === 3) {
          nextBoard[r][c] = 1;
        }
      }
    }
  }
  return nextBoard;
};

const countLiveNeighbors = function(board, r, c) {
  // assuming rectangular board
  return 1;
  // numRows = board.length;
  // numCols = board.length;
  // liveNeighbors = 0;
  // for (dr = -1; dr < 3; dr++) {
  //   for (dc = -1; dc < 3; dr++) {
  //     rowNeighbor = r + dr;
  //     colNeighbor = c + dc;
  //     neighbor = 0;
  //     // only check neighbor for valid indices
  //     // NOTE: off-board 'neighbors' are dead, no wrap-around
  //     rowNeighborExists = !(rowNeighbor < 0 || rowNeighbor >= numRows);
  //     colNeighborExists = !(colNeighbor < 0 || colNeighbor >= numCols);
  //     notSelf = !(rowNeighbor == r && colNeighbor == c);
  //     if (rowNeighborExists && colNeighborExists && notSelf) {
  //       neighbor = board[rNeighbor][colNeighbor];
  //     }
  //     if (neighbor == 1) {
  //       liveNeighbors++;
  //     }
  //   }
  // }
  // return liveNeighbors;
};

const log_board = function(board) {
  sep = "-".repeat(board.length * 2);
  console.log(sep);
  board.forEach(row => {
    row.forEach(col => {
      process.stdout.write(col.toString() + " ");
    });
    console.log("");
  });
  console.log(sep);
};

const board = [
  [1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

log_board(board);
log_board(conway(board));
