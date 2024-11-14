/*
    All houses along a street are arranged in a circle => the first house is the neighbour of the last one. Given an array of non-negative integers representing the amount of money each house has.
    Your task is to return the maximum amount of money that can be robbed without alarming the police => No two adjacent house can be robbed.
*/

const array = [1,2,3,1];
const n = array.length;
//Memorizarion
const memorizedApproach = (array,ind,dp) => {
    if(ind == 0) return array[ind];
    if(ind < 0) return 0;
    if(dp[ind] != -1) return dp[ind];

    let pickedIndex = array[ind] + memorizedApproach(array,ind-2,dp)
    let notPickedIndex = 0 + memorizedApproach(array,ind-1,dp);

    return (dp[ind] = Math.max(pickedIndex,notPickedIndex))
}

const temp1 = array.slice(1);
const temp2 = array.slice(0,n-1);

const n1 = temp1.length;
const n2 = temp2.length;

const dp1 = new Array(n1).fill(-1);
const dp2 = new Array(n2).fill(-1)

if(array.length == 1){
    console.log(array[0])
}
else{
    let maxAmount = Math.max(memorizedApproach(temp1,n1-1,dp1),memorizedApproach(temp2,n2-1,dp2));
    console.log(maxAmount)
}
