class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = new Map();

        for(let str of strs){
            const sortStr = str.split('').sort().join()
            if(!result.has(sortStr)){
                result.set(sortStr, [])
            }
            result.get(sortStr).push(str)
        }
        return Array.from(result.values())
    }
}
