import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

export default function Row(props) {
  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const cells = props.row.map((cell, i) => (
    <Cell key={i} active={cell} dims={props.dims} />
  ));
  return <Row>{cells}</Row>;
}
