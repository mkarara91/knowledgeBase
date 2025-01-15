/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums: number[], val: number): number {
    const notEqualArray : number[]= [];
    nums.forEach(arrNum => arrNum !== val ? notEqualArray.push(arrNum) : null);
    const difference = nums.length - notEqualArray.length;
    nums = notEqualArray;
    return difference;
};

export default removeElement;