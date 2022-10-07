/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (!word1 && !word2) return 0;

    if (!word1) return word2.length;

    if (!word2) return word1.length;

    if (word1[0] === word2[0]) return minDistance(word1.slice(1), word2.slice(1));

    return 1 + Math.min(
        minDistance(word1, word2.slice(1)), // insert
        minDistance(word1.slice(1), word2), // delete
        minDistance(word1.slice(1), word2.slice(1)) // replace
    );
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
