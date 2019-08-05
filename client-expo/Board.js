import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Row from "./Row";

export default function Board(props) {
  const board = props.board;
  const width = 500,
    height = 500;
  const dims = {
    rows: board.length,
    cols: board[0].length,
    width,
    height
  };

  const rows = board.map((row, i) => (
    <Row
      key={`r:${i}`}
      r={i}
      row={row}
      dims={dims}
      running={props.running}
      cellClick={props.cellClick}
    />
  ));
  return <View style={styles.board}>{rows}</View>;
}

const styles = StyleSheet.create({
  board: {
    width: "95%",
    maxHeight: "80%",
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
