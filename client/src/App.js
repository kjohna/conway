import React, { useState, useEffect } from "react";

import conway from "./conway";
import Board from "./Board.js";

function App() {
  // const ogBoard = [
  //   [1, 0, 0, 0, 0, 0, 0, 1, 0],
  //   [0, 1, 1, 0, 0, 0, 0, 1, 0],
  //   [1, 1, 0, 0, 0, 0, 0, 1, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // ];
  const ogBoard = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  let [board, setBoard] = useState(ogBoard);
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  // const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    // update the board every t seconds if running
    console.log("useEffect");
    let animateBoard;
    const t = 0.5;

    function onFrame(nextBoard) {
      setBoard(nextBoard);
      setGeneration(prevGeneration => prevGeneration + 1);
    }

    function loop() {
      // const updatedBoard = conway(board);
      debugger;
      const nextBoard = conway(board);
      animateBoard = setTimeout(() => onFrame(nextBoard), t * 1000);
      // animateBoard = requestAnimationFrame(() => onFrame(nextBoard));
    }

    if (running) {
      loop();
    } else {
      // cancelAnimationFrame(animateBoard);
      clearTimeout(animateBoard);
    }

    // if (running && !waiting) {
    //   const t = 0.5;
    //   setBoard(board => conway(board));
    //   setWaiting(true);
    //   setTimeout(() => setWaiting(false), t * 1000);
    // }
  }, [running, board]);

  const cellClick = rc => {
    console.log(`cellClick: ${rc}`);
    const rcArr = rc.split(",");
    const r = rcArr[0];
    const c = rcArr[1];
    const updatedBoard = board.map(row => [...row]);
    updatedBoard[r][c] = !board[r][c] ? 1 : 0;
    setBoard(updatedBoard);
  };

  return (
    <div className="App">
      <Board board={board} running={running} cellClick={cellClick} />
      <button onClick={() => setRunning(!running)}>start/stop</button>
      <button onClick={() => setBoard(ogBoard)}>reset</button>
      {running && "running"}
      {generation}
    </div>
  );
}

export default App;
