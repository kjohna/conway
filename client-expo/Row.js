import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Cell from "./Cell";

export default function Row(props) {
  const styles = StyleSheet.create({
    row: {
      // borderWidth: 1,
      // borderColor: "red",
      width: props.dims.width,
      height: props.dims.height / props.dims.rows,
      flexDirection: "row"
    }
  });
  const cells = props.row.map((cell, i) => (
    <Cell
      key={`c:${i}`}
      rc={`${props.r},${i}`}
      active={cell}
      dims={props.dims}
      running={props.running}
      cellClick={props.cellClick}
    />
  ));
  return <View style={styles.row}>{cells}</View>;
}
