/*
    There is a frog on the 1st step of an nth stairs long staircase. The fog wants to reach the Nth stair. Height[i] is the height of the (i+1)th stair. If the frog jumps from
    ith stair to jth stair, the energy lost in the jump is given by |Height[i-1]-Height[j-1]|. If the frog is on the ith stair, it can jump upto (i+k)th stair (given k).
    Find out the minimum total energy used by the frog to reach from 1st stair to Nth stair.
*/

const height = [10,20,30,10];
const n = height.length;
const k = 2;

//Memoization
const dp = new Array(n).fill(-1);
const memoizedApproach = (height, n, k, dp) => {
    if (n === 0) return 0;
    if (dp[n] !== -1) return dp[n];

    let minEnergy = Infinity;

    for (let i = 1; i <= k; i++) {
        if (n - i >= 0) {
            let energyConsumed = memoizedApproach(height, n - i, k, dp) + Math.abs(height[n] - height[n - i]);
            minEnergy = Math.min(minEnergy, energyConsumed);
        }
    }

    return (dp[n] = minEnergy);
};

console.log("Memoized Solution: ",memoizedApproach(height,n-1,k,dp))

//Tabulation
const tabulationApproach = (height,n,k) => {
    const dp = new Array(n+1).fill(-1);
    dp[0] = 0

    for(let i=1; i<n; i++){
        let minEnergy = Infinity;

        for(let j=1; j<=k; j++){
            if(i-j >= 0){
                let jump = dp[i-j] + Math.abs(height[i]-height[i-j]);
                minEnergy = Math.min(minEnergy,jump)
            }
        }

        dp[i] = minEnergy;
    }
    return dp[n-1]
}
console.log("Tabulation Solution: ",tabulationApproach(height,n,k))

