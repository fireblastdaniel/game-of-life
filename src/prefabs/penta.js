const size = 29;
const penta = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

penta[5][13] = true;
penta[5][14] = true;
penta[5][15] = true;
penta[6][12] = true;
penta[6][16] = true;
penta[7][12] = true;
penta[7][16] = true;
penta[8][13] = true;
penta[8][14] = true;
penta[8][15] = true;

penta[13][13] = true;
penta[13][14] = true;
penta[13][15] = true;
penta[14][12] = true;
penta[14][16] = true;
penta[15][12] = true;
penta[15][16] = true;
penta[16][13] = true;
penta[16][14] = true;
penta[16][15] = true;

export default penta;
