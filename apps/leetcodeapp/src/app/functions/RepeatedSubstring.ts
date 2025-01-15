
function repeatedSubstringPattern(s: string): boolean {
  if (s.length === 1){
    return false;
  }
  for(let size = 1; size <= s.length/2; size++) {
    if(s.length % size !== 0){
      continue;
    }
    const word = s.slice(0,size);
    const times = s.length / size;
    if (word.repeat(times) === s){
      return true;
    }
  }
  return false;
};

export default repeatedSubstringPattern;