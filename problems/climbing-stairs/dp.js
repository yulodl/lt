/**
 * @param {number} n
 * @return {number}
 */
// curStepWays = oneStepBeforeWays + twoStepsBeforeWays Fibonacci Numbers..
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let twoStepBeforeWays = 1;
    let oneStepBeforeWays = 2;
    for(let i=3; i<=n; i++) {
        const nextOneStepBeforeWays = oneStepBeforeWays + twoStepBeforeWays;
        twoStepBeforeWays = oneStepBeforeWays;
        oneStepBeforeWays = nextOneStepBeforeWays;
    }

    return oneStepBeforeWays;
};

console.log(climbStairs(45));
console.log(climbStairs(3));
