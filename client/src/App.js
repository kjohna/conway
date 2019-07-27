import React, { useState, useEffect } from "react";

import conway from "./conway";
import Board from "./Board.js";

function App() {
  const ogBoard = [
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
  let [board, newBoard] = useState(ogBoard);
  const [running, setRunning] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    // update the board every t seconds if running
    console.log("useEffect");
    if (running && !waiting) {
      const t = 0.5;
      newBoard(board => conway(board));
      setWaiting(true);
      setTimeout(() => setWaiting(false), t * 1000);
    }
  }, [running, waiting]);

  const cellClick = rc => {
    console.log(`cellClick: ${rc}`);
    const rcArr = rc.split(",");
    const r = rcArr[0];
    const c = rcArr[1];
    const updatedBoard = board.map(row => [...row]);
    updatedBoard[r][c] = !board[r][c] ? 1 : 0;
    newBoard(updatedBoard);
  };

  return (
    <div className="App">
      <Board board={board} running={running} cellClick={cellClick} />
      <button onClick={() => setRunning(!running)}>start/stop</button>
      <button onClick={() => newBoard(ogBoard)}>reset</button>
    </div>
  );
}

export default App;
