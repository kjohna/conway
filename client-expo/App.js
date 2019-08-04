import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Board from "./Board";

import conway from "./conway.js";

export default function App() {
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
  // const ogBoard = [
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 0],
  //   [0, 0, 0, 0, 0]
  // ];
  let [board, setBoard] = useState(ogBoard);
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const nextBoard = conway(board);
  // console.log("here");
  const [animateBoard, setAnimateBoard] = useState(null);

  useEffect(() => {
    // console.log("running");
    if (running) {
      setBoard(nextBoard);
    } else {
      // cancelAnimationFrame(animateBoard);
      clearTimeout(animateBoard);
    }
  }, [running]);

  useEffect(() => {
    const t = 0.5;
    // console.log("board");
    if (running) {
      setGeneration(prevGeneration => prevGeneration + 1);
      setAnimateBoard(setTimeout(() => setBoard(nextBoard), t * 1000));
      // setAnimateBoard(requestAnimationFrame(() => setBoard(nextBoard)));
    }
  }, [board]);

  const cellClick = rc => {
    console.log(`cellClick: ${rc}`);
    const rcArr = rc.split(",");
    const r = rcArr[0];
    const c = rcArr[1];
    const updatedBoard = board.map(row => [...row]);
    updatedBoard[r][c] = !board[r][c] ? 1 : 0;
    setBoard(updatedBoard);
  };

  const handleReset = () => {
    setBoard(ogBoard);
    setGeneration(0);
  };

  return (
    <View style={styles.container}>
      <Board board={board} running={running} cellClick={cellClick} />
      <Button onPress={() => setRunning(!running)} title="Start/Stop" />
      <Button onPress={() => handleReset()} title="Reset" />
      <Text>{generation}</Text>
      <Text>{running && "Running!"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
