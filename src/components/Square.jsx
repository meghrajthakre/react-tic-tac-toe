import React, { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  //destructuring on fly

  //const { value } = props; // it is a destructuring

  const handleClick = () => {};

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
