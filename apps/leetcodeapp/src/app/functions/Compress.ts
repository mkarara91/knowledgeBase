function compress(chars: string[]): number {
  let sResult = '';
  let currentCount = 0;
  let currentChar = chars[0];
  
  for(let i = 0; i< chars.length; i++){
    if(chars[i] === currentChar) {
      currentCount++;
    } else {
      // append previous
      sResult = appendChar(sResult, currentChar, currentCount);
      // reset count and put new char
      currentCount = 1;
      currentChar = chars[i];
    }
  }

  // append remaining char
  sResult = appendChar(sResult, currentChar, currentCount);


  const sArr = sResult.split('');
  for(let i = 0; i < sArr.length; i++){
    chars[i] = sArr[i];
  }

  return sResult.length;
};


const appendChar = (str: string, char: string, count: number) => {
  if(count === 1) {
    return str + char
  }
  return str + `${char}${count}`
}