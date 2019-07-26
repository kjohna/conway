const conway = function(board) {
  // assumes rectangular board
  const nextBoard = board.map(row => [...row]); // DON'T DO THIS: [...board];
  const numRows = nextBoard.length;
  const numCols = nextBoard[0].length;
  // for each cell
  for (r = 0; r < numRows; r++) {
    for (c = 0; c < numCols; c++) {
      // get live neighbor count
      const liveNeighbors = countLiveNeighbors(board, r, c);
      // determine if cell lives or dies, populate nextBoard with update
      // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
      const cell = board[r][c];
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
  const numRows = board.length;
  const numCols = board.length;
  let liveNeighbors = 0;
  for (let dr = -1; dr < 2; dr++) {
    for (let dc = -1; dc < 2; dc++) {
      const rowNeighbor = r + dr;
      const colNeighbor = c + dc;
      let neighbor = 0;
      // only check neighbor for valid indices
      // NOTE: off-board 'neighbors' are dead, no wrap-around
      const rowNeighborExists = !(rowNeighbor < 0 || rowNeighbor >= numRows);
      const colNeighborExists = !(colNeighbor < 0 || colNeighbor >= numCols);
      const notSelf = !(rowNeighbor == r && colNeighbor == c);
      if (rowNeighborExists && colNeighborExists && notSelf) {
        neighbor = board[rowNeighbor][colNeighbor];
      }
      if (neighbor == 1) {
        liveNeighbors++;
      }
    }
  }
  // console.log(`r, c: ${r},${c} liveNeighbors: ${liveNeighbors}`);
  return liveNeighbors;
};

const log_board = function(board) {
  sep = "-".repeat(board.length * 2);
  console.log(sep);
  board.forEach(row => {
    let printRow = [];
    row.forEach(col => {
      // process.stdout.write(col.toString() + " ");
      printRow.push(col);
    });
    console.log(printRow.join(" "));
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
let next = conway(board);
log_board(next);
// next = conway(next);
// log_board(conway(next));
// next = conway(next);
// log_board(conway(next));
// next = conway(next);
// log_board(conway(next));
// next = conway(next);
// log_board(conway(next));
