function repeatedStringMatch(a: string, b: string): number {
  let repeatedString = "";
  let repeats = 0;
  while(repeatedString.length <= (b.length+a.length)) {
    repeatedString += a;
    repeats ++;
    if(repeatedString.includes(b)){
      return repeats;
    }
  }
  return -1;
};

export default repeatedStringMatch;