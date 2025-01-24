// i = 0 row, i = 1 column
const possibleMoves = [[1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2, -1], [-2, 1], [-1, 2]];


function knightProbability(n: number, k: number, row: number, column: number): number {
  if(k === 0) {
    return 1;
  }
  let board = Array.from({length: n}, () => Array(n).fill(0));
  board[row][column] = 1;


  for(let i = 0; i < k; i++){
    const newBoard = Array.from({length: n}, () => Array(n).fill(0));
    
    for(let r = 0; r < n; r++) {
      for(let c = 0; c < n; c++) {
        possibleMoves.forEach(moves => {
          const nr = r +moves[0];
          const nc = c +moves[1];
          if(isInsideBoard(n, nr, nc)){
            newBoard[r][c] += board[nr][nc]/8;
          }
        });
      }
    }
    board = newBoard;
  }

  let prob = 0;
  for(let r = 0; r < n; r++) {
    for(let c = 0; c < n; c++) {
      prob += board[r][c]
    }
  }

  return prob;
};

const isInsideBoard = (n: number, r: number, c: number) => {
  return r >= 0 && r < n && c >= 0 && c < n;
}

export default knightProbability;