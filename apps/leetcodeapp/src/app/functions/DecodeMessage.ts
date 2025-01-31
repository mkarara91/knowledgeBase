const alpha = 'abcdefghijklmnopqrstuvwxyz';
function decodeMessage(key: string, message: string): string {
    const map = getTable(key);

    let decoded = '';

    for(let i=0; i<message.length; i++){
      decoded += map.get(message[i]) ?? '';
    }

    return decoded;
};

const getTable = (key: string): Map<string, string> => {
  const map: Map<string,string> = new Map();
  let indexAlpha = 0, indexKey = 0;
  map.set(' ', ' ')

  while(indexAlpha < alpha.length && indexKey < key.length){
    if(!map.get(key[indexKey])){
      map.set(key[indexKey], alpha[indexAlpha])
      indexAlpha ++;
    }
    indexKey ++;
  }
  return map;
}