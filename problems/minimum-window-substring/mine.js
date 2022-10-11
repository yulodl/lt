/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return '';

    const diff = {};
    let total = t.length;
    for (let i = 0; i < t.length; i++) {
        diff[t[i]] = (diff[t[i]] || 0) - 1;
    }

    let targetStart = -1;
    let targetEnd = -1;
    let start = 0;
    let end = 0;
    while (end < s.length) {
        if (s[end] in diff) {
            if (diff[s[end]] < 0) total -= 1;

            diff[s[end]] += 1;

            while (total === 0) {
                if (targetEnd === -1 || end - start < targetEnd - targetStart) {
                    [targetStart, targetEnd] = [start, end];
                }

                if (s[start] in diff) {
                    if (diff[s[start]] <= 0) total += 1;

                    diff[s[start]] -= 1;
                }

                start++
            }
        }

        end++;
    }

    return targetEnd === -1 ? '' : s.substring(targetStart, targetEnd + 1);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));
