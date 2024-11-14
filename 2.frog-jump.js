/*
    There is a frog on the 1st step of an nth stairs long staircase. The fog wants to reach the Nth stair. Height[i] is the height of the (i+1)th stair. If the frog jumps from
    ith stair to jth stair, the energy lost in the jump is given by |Height[i-1]-Height[j-1]|. If the frog is on the ith stair, it can jump either to (i+1)th stair or (i+2)th stair.
    Find out the minimum total energy used by the frog to reach from 1st stair to Nth stair.
*/

const height = [10,20,30,10];
const n = height.length;
const dp = new Array(n+1).fill(-1)

//Memoization Solution
const memoizedSolution = (height,n,dp) => {
    if(n == 0) return 0;
    if(dp[n] !== -1) return dp[n];

    let left = memoizedSolution(height,n-1,dp) + Math.abs(height[n] - height[n-1]);
    let right = Infinity;
    if(n > 1){
        right = memoizedSolution(height,n-2,dp) + Math.abs(height[n] - height[n-2])
    }

    return (dp[n] = Math.min(left,right));
}

console.log("Memoized Solution: ",memoizedSolution(height,n-1,dp))

//Tabulation
const tabulationApproach = (n,height) => {
    const dp = new Array(n+1).fill(-1);
    dp[0] = 0;

    for(let i=1; i<n; i++){
        let left = dp[i-1] + Math.abs(height[i]-height[i-1]);

        let right = Infinity;
        if(i > 1){
            right = dp[i-2] + Math.abs(height[i]-height[i-2])
        }

        dp[i] = Math.min(left,right)
    }

    return dp[n-1]
}

console.log("Tabulation Approach: ",tabulationApproach(n,height))

//Space Optimization
const spaceOptimizedApproach = (height,n) => {
    let prev2 = 0;
    let prev = 0;

    for(let i=1; i<n; i++){
        let left = prev + Math.abs(height[i]-height[i-1]);
        let right = Infinity;
        if(i > 1){
            right = prev2 + Math.abs(height[i]-height[i-2]);
        }

        let cur = Math.min(left,right);
        prev2 = prev;
        prev = cur;
    }

    return prev;
}
console.log("Space Optimized Approach: ",spaceOptimizedApproach(height,n))

