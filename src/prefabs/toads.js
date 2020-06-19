const size = 29;
const toads = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

toads[5][6] = true;
toads[5][7] = true;
toads[5][8] = true;
toads[6][5] = true;
toads[6][6] = true;
toads[6][7] = true;

toads[5][13] = true;
toads[5][14] = true;
toads[5][15] = true;
toads[6][12] = true;
toads[6][13] = true;
toads[6][14] = true;

toads[5][20] = true;
toads[5][21] = true;
toads[5][22] = true;
toads[6][19] = true;
toads[6][20] = true;
toads[6][21] = true;

toads[11][6] = true;
toads[11][7] = true;
toads[11][8] = true;
toads[12][5] = true;
toads[12][6] = true;
toads[12][7] = true;

toads[11][13] = true;
toads[11][14] = true;
toads[11][15] = true;
toads[12][12] = true;
toads[12][13] = true;
toads[12][14] = true;

toads[11][20] = true;
toads[11][21] = true;
toads[11][22] = true;
toads[12][19] = true;
toads[12][20] = true;
toads[12][21] = true;

toads[17][6] = true;
toads[17][7] = true;
toads[17][8] = true;
toads[18][5] = true;
toads[18][6] = true;
toads[18][7] = true;

toads[17][13] = true;
toads[17][14] = true;
toads[17][15] = true;
toads[18][12] = true;
toads[18][13] = true;
toads[18][14] = true;

toads[17][20] = true;
toads[17][21] = true;
toads[17][22] = true;
toads[18][19] = true;
toads[18][20] = true;
toads[18][21] = true;

export default toads;
