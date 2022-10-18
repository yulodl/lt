/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const cache = {};

    function getResult(s1, s2) {
        const len = s1.length;

        if (s1 === s2) return true;

        if (s2.length !== len || len === 1) return false;

        const cacheKey = `${s1}-${s2}`;
        if (cacheKey in cache) return cache[cacheKey];

        for (let i = 1; i < len; i++) {
            if (
                getResult(s1.substring(0, i), s2.substring(0, i))
                && getResult(s1.substring(i), s2.substring(i))
            ) {
                cache[cacheKey] = true;
                break;
            }

            if (
                getResult(s1.substring(0, i), s2.substring(len - i))
                && getResult(s1.substring(i), s2.substring(0, len - i))
            ) {
                cache[cacheKey] = true;
                break;
            }
        }

        if (!cache[cacheKey]) cache[cacheKey] = false;

        return cache[cacheKey];
    }

    return getResult(s1, s2);
};

console.log(isScramble('abcd', 'dbac'));
console.log(isScramble('great', 'rgeat'));
console.log(isScramble('abcde', 'caebd'));
console.log(isScramble('a', 'a'));
