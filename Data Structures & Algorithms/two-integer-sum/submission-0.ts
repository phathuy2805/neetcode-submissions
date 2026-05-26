class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = new Map();

        for(let i = 0; i < nums.length; i++){
            indices[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++){
            const cur = nums[i];
            const needed = target - cur;

            if(indices[needed] !== undefined && indices[needed] !== i){
                return [i, indices[needed]]
            }
        }

        return []
    }
}