function canBeValid(s: string, locked: string): boolean {
  const stringLength = s.length;
  if(stringLength % 2 === 1) {
    return false;
  }


  const openIndecies = [];
  const unlockedIndecies = [];

  // match any locked open
  for( let i = 0; i < stringLength; i++) {
      if(locked[i] === '0'){ // if it is unlocked add to unlocked indecies
        unlockedIndecies.push(i);
      } else if (s[i] === '(') { // if locked position is ( add to openIndecies
        openIndecies.push(i);
      } else if (s[i] === ')') { // if locked position is ) check if can be closed from locked positions or unlocked if not then cannot be valid
        if(openIndecies.length > 0){
          openIndecies.pop()
        } else if (unlockedIndecies.length > 0) {
          unlockedIndecies.pop();
        } else {
          return false;
        }
      }
  }

  // match locked open indecies with an unlocked index, locked open index must be before unlocked one other wise it is not valid
  while(openIndecies.length > 0 && unlockedIndecies.length > 0 && openIndecies[openIndecies.length-1] < unlockedIndecies[unlockedIndecies.length -1]){
    openIndecies.pop();
    unlockedIndecies.pop();
  }

  return openIndecies.length === 0 && unlockedIndecies.length % 2 === 0;
};
