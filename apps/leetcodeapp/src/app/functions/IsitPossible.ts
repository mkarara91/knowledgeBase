function isItPossible(word1: string, word2: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const word1Map = new Map();
  const word2Map = new Map();
  word1.split("").map((value) => word1Map.set(value, word1Map.get(value)? word1Map.get(value) +1 : 1));
  word2.split("").map((value) => word2Map.set(value, word2Map.get(value)? word2Map.get(value) +1 : 1));

  for(let i =0; i < alphabet.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      const char1 = alphabet[i], char2 = alphabet[j];
      if(!word1Map.get(char1) || !word2Map.get(char2)){
        continue;
      }

      const freq1 = word1Map.get(char1);
      insertAndRemove(word1Map, char2, char1);
      insertAndRemove(word2Map, char1, char2);

      if(word1Map.size === word2Map.size){
        return true;
      }

      insertAndRemove(word1Map, char1, char2);
      insertAndRemove(word2Map, char2, char1);
    }
  }
  return false;
};

const insertAndRemove = (map: Map<string, number>, charToInsert: string, charToRemove: string) => {
  map.set(charToInsert, (map.get(charToInsert) ?? 0) + 1);
  map.set(charToRemove, (map.get(charToRemove) ?? 0) - 1);
  if(map.get(charToRemove) === 0){
    map.delete(charToRemove);
  }
}

export default isItPossible;