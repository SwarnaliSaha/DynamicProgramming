/*
    You are given a number of stairs. Initially, you are at the 0th stair and you need to reach the Nth stair. Each time you can either climb up one step or two steps.
    You have to return the number of distinct ways in which you can reach the Nth stair from the 0th stair.
*/

let stairs = 3;
const dp = new Array(stairs+1).fill(-1);

// Memoization
const countNumberOfWaysOne = (n,dp) => {
    if(n==0 || n==1) return 1;
    if(dp[n] !== -1) return dp[n];

    let left = countNumberOfWaysOne(n-1,dp);
    let right = countNumberOfWaysOne(n-2,dp);

    return (dp[n] = left + right);
}

console.log("Using Memoization: ",countNumberOfWaysOne(stairs,dp))

// Tabulation
const countNumberOfWaysTwo = (n) => {
    const dp = new Array(n+1).fill(-1);
    dp[0] = 1;
    dp[1] = 1;

    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}
console.log("Using Tabulation: ",countNumberOfWaysTwo(stairs))

//Space Optimization
const countNumberOfWaysThree = (n) => {
    let prev2 = 1;
    let prev = 1;

    for(let i=2; i<=n; i++){
        let cur = prev2+prev;
        prev2 = prev;
        prev = cur;
    }

    return prev;
}
console.log("Using Space Optimization: ",countNumberOfWaysThree(stairs))

