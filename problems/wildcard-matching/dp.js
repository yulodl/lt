/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = Array(p.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < p.length; i++) {
        const preDp = [...dp];
        const isAsterisk = p[i] === '*';
        const isQuestionMark = p[i] === '?';
        dp[0] = preDp[0] && isAsterisk;
        for (let j = 0; j < s.length; j++) {
            if (isAsterisk) {
                dp[j + 1] = preDp[j + 1] || dp[j];
            } else if (isQuestionMark) {
                dp[j + 1] = preDp[j];
            } else {
                dp[j + 1] = preDp[j] && p[i] === s[j];
            }
        }
    }

    return !!dp[s.length];
};

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', '*'));
console.log(isMatch('cb', '?a'));
console.log(isMatch('a', ''));

console.log(isMatch("aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba", "*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*"));
console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb","**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"));
