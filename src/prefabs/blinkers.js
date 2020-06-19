const size = 29;
const blinkers = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

blinkers[6][5] = true;
blinkers[6][6] = true;
blinkers[6][7] = true;
blinkers[6][12] = true;
blinkers[6][13] = true;
blinkers[6][14] = true;
blinkers[6][19] = true;
blinkers[6][20] = true;
blinkers[6][21] = true;

blinkers[10][5] = true;
blinkers[10][6] = true;
blinkers[10][7] = true;
blinkers[10][12] = true;
blinkers[10][13] = true;
blinkers[10][14] = true;
blinkers[10][19] = true;
blinkers[10][20] = true;
blinkers[10][21] = true;

blinkers[14][5] = true;
blinkers[14][6] = true;
blinkers[14][7] = true;
blinkers[14][12] = true;
blinkers[14][13] = true;
blinkers[14][14] = true;
blinkers[14][19] = true;
blinkers[14][20] = true;
blinkers[14][21] = true;

blinkers[18][5] = true;
blinkers[18][6] = true;
blinkers[18][7] = true;
blinkers[18][12] = true;
blinkers[18][13] = true;
blinkers[18][14] = true;
blinkers[18][19] = true;
blinkers[18][20] = true;
blinkers[18][21] = true;

blinkers[22][5] = true;
blinkers[22][6] = true;
blinkers[22][7] = true;
blinkers[22][12] = true;
blinkers[22][13] = true;
blinkers[22][14] = true;
blinkers[22][19] = true;
blinkers[22][20] = true;
blinkers[22][21] = true;

export default blinkers;
