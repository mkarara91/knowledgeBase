function checkValidString(s: string): boolean {
  if(s.length % 2 !== 0){
    return false;
  } 

  if(s[0] === ')' || s[s.length-1] === '(') {
    return false;
  }

  const rightOpenIndecies = [];
  const jokerIndecies = [];

  for(let i =0; i< s.length; i++) {
    if(s[i] === '(') {
      rightOpenIndecies.push(i);
    } else if (s[i] === '*') {
      jokerIndecies.push(i);
    } else {
      if(rightOpenIndecies.length > 0) {
        rightOpenIndecies.pop();
      } else if (jokerIndecies.length > 0) {
        jokerIndecies.pop();
      } else {
        return false;
      }
    }
  }


  while(rightOpenIndecies.length > 0 && jokerIndecies.length > 0 && rightOpenIndecies[rightOpenIndecies.length -1] < jokerIndecies[jokerIndecies.length -1]){
    rightOpenIndecies.pop();
    jokerIndecies.pop();
  }

  return rightOpenIndecies.length === 0;
};