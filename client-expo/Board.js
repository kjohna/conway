import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Row from "./Row";

export default function Board(props) {
  const board = props.board;
  const width = 300,
    height = 300;
  const dims = {
    rows: board.length,
    cols: board[0].length,
    width: width,
    height: height
  };

  const styles = StyleSheet.create({
    board: {
      width,
      height
      // borderStyle: "solid",
      // borderColor: "blue",
      // borderWidth: 1
      // flex: -1,
      // flexDirection: "column"
      // flexWrap: "wrap"
    }
  });

  const rows = board.map((row, i) => (
    // <View
    //   style={{
    //     width: 300,
    //     height: 300 / board.length,
    //     backgroundColor: "green"
    //   }}
    // >
    //   <Text>{row}</Text>
    // </View>
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
