import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Row(props) {
  const cells = props.row.map((cell, i) => (
    <Text>{cell}</Text>
    //     <Cell
    //   key={`c:${i}`}
    //   rc={`${props.r},${i}`}
    //   active={cell}
    //   dims={props.dims}
    //   running={props.running}
    //   cellClick={props.cellClick}
    // />
  ));
  console.log(cells);
  return <View style={styles.row}>{cells}</View>;
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexWrap: "wrap"
  }
});
