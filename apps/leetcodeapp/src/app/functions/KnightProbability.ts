const possibleMoves = [-2,-1,1,2];


const iteratePossibleMoves = (n: number, row: number, column: number, callback: any) => {
  for(let i = 0; i< possibleMoves.length; i++){
    for (let j = 0; j< possibleMoves.length; j++){
        if(possibleMoves[i] === possibleMoves[j]){
            continue;
        }
      const newRow = row + possibleMoves[i];
      const newColumn = column+possibleMoves[j];
      if(newRow === 0 || newColumn === 0){
        continue;
      }
      if((newRow >= 0 && newRow < n) && (newColumn >= 0 && newColumn < n)){
        callback(newRow, newColumn);
      }
    }
  }
}

function knightProbability(n: number, k: number, row: number, column: number): number {
    if(k === 0) {
      return 1;
    }
    const probs = [];
    for(let i = 0 ; i< k; i++){
      
      probs.push(getNumberOfPossibleMoves(n, row, column) / 8);
    }
    let probabilityInCell = getNumberOfPossibleMoves(n, row, column) / 8;
      
    


    
    let probabilities = [probabilityInCell];
    iteratePossibleMoves(n, row, column, (i: number, j: number) => {
      probabilities.push(knightProbability(n, k-1, i, j));
    });

    let actualProbs = probabilities[0];

    for(let i = 1; i < k; i ++){
      actualProbs = actualProbs * probabilities[i];
    }

    return actualProbs;
};

const getNumberOfPossibleMoves = (n: number, row: number, column: number) => {
  const possible = new Set<{row: number, column: number}>();
  iteratePossibleMoves(n, row, column, (i: number, j: number) => {
    possible.add({row: i, column: j});
  })
  console.log(possible)
  return possible.size;
}

export default knightProbability;