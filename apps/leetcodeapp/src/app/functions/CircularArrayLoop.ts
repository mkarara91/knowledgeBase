function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length;

  
  function nextIndex(index: number, direction: boolean): number {

    let movement = nums[index] >= 0;
    
    if(movement !== direction)
        return -1;

    let nextIndex = (index + nums[index]) % nums.length;

    if(nextIndex < 0){
      nextIndex += nums.length
    }

    if(nextIndex === index) return -1;

    return nextIndex;
  }
   
  for(let i = 0; i < n; i++){
    const direction = nums[i] > 0;

    let slow = i;
    let fast = i;

    while(true){

      slow = nextIndex(slow, direction);
      if(slow === -1)
          break;
      
      fast = nextIndex(fast, direction);
      if(fast === -1)
          break;
      fast = nextIndex(fast, direction);
      if(fast === -1)
          break;
      
      if(slow === fast) 
          return true;
    }
  }

  return false;
};
