import time
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/step', methods=['POST'])
def step_forward():
  grid = request.get_json()['active']
  updated_grid = []

  for i in range(len(grid)):
    row = []
    for j in range(len(grid)):
      neighbors = 0
      if i > 0 and j > 0:
        if grid[i-1][j-1]:
          neighbors += 1
      if i > 0:
        if grid[i-1][j]:
          neighbors += 1
      if i > 0 and j < len(grid) - 1:
        if grid[i-1][j+1]:
          neighbors += 1
      if j > 0:
        if grid[i][j-1]:
          neighbors += 1
      if j < len(grid) - 1:
        if grid[i][j+1]:
          neighbors += 1
      if i < len(grid) - 1 and j > 0:
        if grid[i+1][j-1]:
          neighbors += 1
      if i < len(grid) - 1:
        if grid[i+1][j]:
          neighbors += 1
      if i < len(grid) - 1 and j < len(grid) - 1:
        if grid[i+1][j+1]:
          neighbors += 1

      if neighbors == 2:
        if grid[i][j]:
          row.append(True)
        else:
          row.append(False)
      elif neighbors == 3:
        row.append(True)
      else:
        row.append(False)
    
    updated_grid.append(row)

  return {'active': updated_grid}
  # return grid
  