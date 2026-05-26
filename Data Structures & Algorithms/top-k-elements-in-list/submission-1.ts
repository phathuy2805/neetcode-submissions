class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map();

        for(let num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }

        const entries = Array.from(count.entries())

        entries.sort((a, b)=> b[1]  - a[1])


        return entries.slice(0, k).map((pair)=> pair[0])

    }
}
