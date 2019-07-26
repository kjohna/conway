import React, { useState, useEffect } from "react";

import conway from "./conway";
import Board from "./Board.js";

function App() {
  const [board, newBoard] = useState([
    [1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  useEffect(() => {
    // update the board every "t" seconds
    const t = 0.5;
    setTimeout(() => newBoard(conway(board)), t);
  });
  return (
    <div className="App">
      <Board board={board} />
      {/* <button onClick={() => newBoard(conway(board))}>new board</button> */}
    </div>
  );
}

export default App;
