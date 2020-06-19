const size = 29;
const space = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

space[4][5] = true;
space[4][6] = true;
space[4][7] = true;
space[4][8] = true;
space[5][4] = true;
space[5][8] = true;
space[6][8] = true;
space[7][4] = true;
space[7][7] = true;

space[11][5] = true;
space[11][6] = true;
space[11][7] = true;
space[11][8] = true;
space[11][9] = true;
space[12][4] = true;
space[12][9] = true;
space[13][9] = true;
space[14][4] = true;
space[14][8] = true;
space[15][6] = true;

space[21][8] = true;
space[21][9] = true;
space[22][4] = true;
space[22][5] = true;
space[22][6] = true;
space[22][7] = true;
space[22][9] = true;
space[22][10] = true;
space[23][4] = true;
space[23][5] = true;
space[23][6] = true;
space[23][7] = true;
space[23][8] = true;
space[23][9] = true;
space[24][5] = true;
space[24][6] = true;
space[24][7] = true;
space[24][8] = true;

export default space;
