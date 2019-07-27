import React from "react";
import styled from "styled-components";

import Row from "./Row";

function Board(props) {
  const board = props.board;
  const width = 500,
    height = 500;
  const dims = {
    rows: board.length,
    cols: board[0].length,
    width,
    height
  };
  const Board = styled.div`
    width: ${width}px;
    height: ${height}px;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const rows = board.map((row, i) => (
    <Row
      key={`r:${i}`}
      r={i}
      row={row}
      dims={dims}
      cellClick={props.cellClick}
    />
  ));
  return <Board>{rows}</Board>;
}

export default Board;
