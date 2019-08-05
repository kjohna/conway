import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Cell(props) {
  // const height = props.dims.height / props.dims.rows;
  // const width = props.dims.width / props.dims.cols;
  const height = 30;
  const width = 30;
  const backgroundColor = props.active ? "white" : "black";
  const color = props.active ? "black" : "white";
  const styles = StyleSheet.create({
    cell: {
      height,
      width,
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
