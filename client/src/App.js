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
  const [board, newBoard] = useState(ogBoard);
  const [running, setRunning] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [cellUpdate, setCellUpdate] = useState(false);

  useEffect(() => {
    // update the board every t seconds if running
    if (running && !waiting) {
      const t = 0.5;
      newBoard(conway(board));
      setWaiting(true);
      setTimeout(() => setWaiting(false), t * 1000);
    }
    if (cellUpdate) {
      newBoard(board);
      setCellUpdate(false);
    }
  }, [running, waiting, board, cellUpdate]);

  const cellClick = rc => {
    const rcArr = rc.split(",");
    const r = rcArr[0];
    const c = rcArr[1];
    console.log(board);
    board[r][c] = !board[r][c] ? 1 : 0;
    setCellUpdate(true);
    console.log(`${r}, ${c} = ${!board[r][c] ? 1 : 0}`);
    console.log(board);
  };

  return (
    <div className="App">
      <Board board={board} cellClick={cellClick} />
      <button onClick={() => setRunning(!running)}>start/stop</button>
      <button onClick={() => newBoard(ogBoard)}>reset</button>
    </div>
  );
}

export default App;
