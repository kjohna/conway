import React from "react";
import styled from "styled-components";

export default function Cell(props) {
  const Cell = styled.div`
    height: ${props.dims.height / props.dims.rows}px;
    width: ${props.dims.width / props.dims.cols}px;
    background-color: ${props.active ? "white" : "black"};
    color: ${props.active ? "black" : "white"};
  `;
  return <Cell />;
}
