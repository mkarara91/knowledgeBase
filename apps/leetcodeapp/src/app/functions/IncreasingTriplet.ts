function increasingTriplet(nums: number[]): boolean {
    if(nums.length < 3) {
      return false;
    }
    const prefix = new Array().fill(null);
    const suffix = new Array().fill(null);
    // build prefix (at each index get the min before)
    for(let i = 1; i<nums.length; i++){
      if(prefix[i-1] === null){
        prefix[i] = nums[i-1];
      } else {
        prefix[i] = Math.min(nums[i-1], prefix[i-1]);
      }
    }

    // build suffix (at each index get the max after)

    for(let i = nums.length - 2; i >= 0; i--){
      if(suffix[i+1] === null){
        suffix[i] = nums[i+1];
      } else {
        suffix[i] = Math.max(suffix[i+1], nums[i+1]);
      }
    }

    // check each index starting 1 if there is lower value in same index in prefix and higher value in suffix
    for(let i = 1; i < nums.length -1; i++){
      if(nums[i] < prefix[i] || nums[i] > suffix[i]){
        continue;
      } else {
        return true;
      }
    }

    return false;
};