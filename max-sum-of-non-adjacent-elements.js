/*
    You are given an arraylist of N elements. You are supposed to return the maximum sum of the subsequence with the constraint that no two elements are adjacent in the given arraylist.
*/

//Memorization Approach
const array = [2,1,4,9];
const n = array.length;
const dp = new Array(n).fill(-1)
const memorizedSolution = (array,ind,dp) => {
    if(ind == 0) return array[ind];
    if(ind < 0) return 0;
    if(dp[ind] != -1) return dp[ind];

    let pickedIndex = array[ind] + memorizedSolution(array,ind-2,dp)
    let notPickedIndex = 0 + memorizedSolution(array,ind-1,dp);

    return (dp[ind] = Math.max(pickedIndex,notPickedIndex))
}
console.log("Memoized Solution: ",memorizedSolution(array,n-1,dp))

//Tabulation Approach
const tabulationApproach = (array,n) => {
    const dp = new Array(n+1).fill(-1);
    dp[0] = array[0]

    for(let i=1; i<n; i++){
        let pick = array[i];
        if(i > 1) pick +=dp[i-2]
        let notPick = 0 + dp[i-1];

        dp[i] = Math.max(pick,notPick)
    }

    return dp[n-1]
}
console.log("Tabulation Approach: ",tabulationApproach(array,n));

//Space Optimization
const spaceOptimizedApproach = (array,n) => {
    let prev = array[0];
    let prev2 = 0;

    for(let i=1; i<n; i++){
        let pick = array[i];
        if(i>1) pick +=prev2;
        let notPick = 0 + prev;

        let cur = Math.max(pick,notPick);
        prev2 = prev;
        prev = cur;
    }
    return prev;
}
console.log("Space Optimized Approach: ",spaceOptimizedApproach(array,n));
