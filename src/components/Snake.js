import React, { useState, useEffect } from 'react';

export const Snake = () => {
  const [snakeState, setSnakeState] = useState({
    rows: 10,
    cols: 10,
    grid: [],
  });

  //GRID
  const buildGrid = () => {
    const grid = [];
    for (let row = 0; row < snakeState.rows; row++) {
      for (let col = 0; col < snakeState.cols; col++) {
        grid.push({
          row,
          col,
        });
      }
    }

    setSnakeState({ grid: grid });

    // for making food
  };

  useEffect(() => {
    buildGrid();
    const food = getRandomGrid();
  }, []);

  // FOOD
  // Get a random position on the grid
  const getRandomGrid = () => {
    return {
      row: Math.floor(Math.random() * snakeState.rows),
      col: Math.floor(Math.random() * snakeState.cols),
    };
  };

  // Build the items on the grid
  const gridItems = snakeState.grid.map((grid) => {
    return (
      <div
        key={grid.row.toString() + '-' + grid.col.toString()}
        className='grid-item'
      ></div>
    );
  });

  return (
    <div className='snake-container'>
      <div className='grid'>{gridItems}</div>
    </div>
  );
};
