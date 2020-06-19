const size = 29;
const beacons = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

beacons[5][5] = true;
beacons[5][6] = true;
beacons[6][5] = true;
beacons[7][8] = true;
beacons[8][7] = true;
beacons[8][8] = true;

beacons[5][12] = true;
beacons[5][13] = true;
beacons[6][12] = true;
beacons[7][15] = true;
beacons[8][14] = true;
beacons[8][15] = true;

beacons[5][19] = true;
beacons[5][20] = true;
beacons[6][19] = true;
beacons[7][22] = true;
beacons[8][21] = true;
beacons[8][22] = true;

beacons[12][5] = true;
beacons[12][6] = true;
beacons[13][5] = true;
beacons[14][8] = true;
beacons[15][7] = true;
beacons[15][8] = true;

beacons[12][12] = true;
beacons[12][13] = true;
beacons[13][12] = true;
beacons[14][15] = true;
beacons[15][14] = true;
beacons[15][15] = true;

beacons[12][19] = true;
beacons[12][20] = true;
beacons[13][19] = true;
beacons[14][22] = true;
beacons[15][21] = true;
beacons[15][22] = true;

beacons[19][5] = true;
beacons[19][6] = true;
beacons[20][5] = true;
beacons[21][8] = true;
beacons[22][7] = true;
beacons[22][8] = true;

beacons[19][12] = true;
beacons[19][13] = true;
beacons[20][12] = true;
beacons[21][15] = true;
beacons[22][14] = true;
beacons[22][15] = true;

beacons[19][19] = true;
beacons[19][20] = true;
beacons[20][19] = true;
beacons[21][22] = true;
beacons[22][21] = true;
beacons[22][22] = true;

export default beacons;
