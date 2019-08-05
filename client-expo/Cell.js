import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Cell(props) {
  const height = "100%"; // props.dims.height / props.dims.rows;
  const width = "100%"; // props.dims.width / props.dims.cols;
  // console.log(width, height);
  // const height = 32;
  // const width = 32;
  const backgroundColor = props.active ? "white" : "black";
  const color = props.active ? "black" : "white";
  const styles = StyleSheet.create({
    cell: {
      height,
      width,
      borderColor: "blue",
      borderWidth: 1,
      borderStyle: "solid",
      flexShrink: 1,
      backgroundColor,
      color
    }
  });

  return props.running ? (
    <TouchableOpacity style={styles.cell} />
  ) : (
    <TouchableOpacity
      style={styles.cell}
      title="off"
      onPress={() => props.cellClick(props.rc)}
    />
  );
}
