const randomize = (rate, gridSize) => {
  const output = [];
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      Math.floor(Math.random() * 100) < rate ? row.push(true) : row.push(false);
    }
    output.push(row);
  }
  return output;
};

export default randomize;
