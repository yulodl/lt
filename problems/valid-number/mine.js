/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const isInteger = numStr => /^[+-]?\d+$/.test(numStr);
    const isDecimal = numStr => /^[+-]?(\d+\.\d*|\.\d+)$/.test(numStr);

    const lowerCaseStr = s.toLowerCase();
    if (!lowerCaseStr.includes('e')) {
        return isInteger(s) || isDecimal(s);
    }

    const parts = lowerCaseStr.split('e');
    if (parts.length > 2) return false;

    return (isInteger(parts[0]) || isDecimal(parts[0])) && isInteger(parts[1]);
};

console.log(isNumber('0'));
console.log(isNumber('e'));
console.log(isNumber('.'));
