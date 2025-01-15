function strStr(haystack: string, needle: string): number {
    const stopLength = haystack.length - (needle.length -1);
    for(let i = 0; i <= stopLength; i++){
      if(haystack[i] === needle[0]) {
        if (haystack.slice(i, i + needle.length) === needle) {
          return i;
        }
      }
    }
    return -1;
};

export default strStr;