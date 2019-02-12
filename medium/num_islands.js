var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let count = 0;
  let height = grid.length;
  let width = grid[0].length;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row === height || col === width) return null;
    if (grid[row][col] === '0') return null;
    grid[row][col] = '0';

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === '1') {
        count += 1;
        dfs(row, col);
      }
    }
  }

  return count;
};