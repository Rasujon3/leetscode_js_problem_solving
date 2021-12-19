// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        // "diffIndex !== index" takes care of same index not being reused
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
}

module.exports = twoSum;