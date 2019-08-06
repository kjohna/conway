import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import * as Haptics from "expo-haptics";
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
      Haptics.impactAsync("heavy");
    } else {
      // cancelAnimationFrame(animateBoard);
      Haptics.impactAsync("heavy");
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
    // console.log(`cellClick: ${rc}`);
    Haptics.impactAsync("heavy");
    const rcArr = rc.split(",");
    const r = rcArr[0];
    const c = rcArr[1];
    const updatedBoard = board.map(row => [...row]);
    updatedBoard[r][c] = !board[r][c] ? 1 : 0;
    setBoard(updatedBoard);
  };

  const handleReset = () => {
    Haptics.impactAsync("heavy");
    setBoard(ogBoard);
    setGeneration(0);
  };

  const handleURLTap = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("handleURLTap error: " + url);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conway's Game of Life</Text>
      <Text
        style={styles.link}
        onPress={() =>
          handleURLTap("https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life")
        }
      >
        What's this?
      </Text>
      <Text style={styles.tip}>Protip: Tap squares while stopped!</Text>
      <Board board={board} running={running} cellClick={cellClick} />
      <Button onPress={() => setRunning(!running)} title="Start/Stop" />
      <Button disabled={running} onPress={() => handleReset()} title="Reset" />
      <Text>Generation: {generation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 25
  },
  link: {
    color: "blue",
    marginBottom: 20
  },
  tip: {
    marginBottom: 10
  }
});
