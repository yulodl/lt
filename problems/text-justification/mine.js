/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const str = words.join(' ');
    const strLen = str.length;
    if (strLen === maxWidth) return [str];

    if (strLen < maxWidth) {
        const spaceArr = Array(Math.max(words.length - 1, 1)).fill(words.length > 1 ? ' ' : '');
        const diff = maxWidth - strLen;
        for (let i = 0; i < diff; i++) {
            spaceArr[i % spaceArr.length] += ' ';
        }

        return [words.reduce((line, word, idx) => {
            line += word + (spaceArr[idx] || '');

            return line;
        }, '')];
    }

    const len = words.length;
    const ans = [];
    let line = [];
    for (let i = 0; i < len; i++) {
        const word = words[i];
        const nextLine = [...line, word];
        if (nextLine.join(' ').length > maxWidth) {
            ans.push(fullJustify(line, maxWidth)[0]);
            line = [word];
        } else {
            line = nextLine;
        }

        if (i === len - 1) {
            ans.push(fullJustify([line.join(' ')], maxWidth)[0]);
        }
    }

    return ans;
};

console.log(fullJustify(["a"], 1));
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
