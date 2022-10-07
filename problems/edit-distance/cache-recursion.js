/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const cached = {};
    function getDistance(word1, word2) {
        const cacheKey = `${word1}-${word2}`;
        if (cacheKey in cached) return cached[cacheKey];

        let distance;
        if (!word1 && !word2) {
            distance = 0;
        } else if (!word1 || !word2) {
            if (!word1) {
                distance = word2.length;
            }

            if (!word2) {
                distance = word1.length;
            }
        } else {
            if (word1[0] === word2[0]) {
                distance = getDistance(word1.slice(1), word2.slice(1));
            } else {
                distance = 1 + Math.min(
                    getDistance(word1, word2.slice(1)), // insert
                    getDistance(word1.slice(1), word2), // delete
                    getDistance(word1.slice(1), word2.slice(1)) // replace
                );
            }
        }

        cached[cacheKey] = distance;


        return distance;
    }

    return getDistance(word1, word2);
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
