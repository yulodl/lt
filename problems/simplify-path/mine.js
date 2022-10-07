/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const names = [];
    path.split('/').forEach(name => {
        if (!name || name === '.') return;

        if (name === '..') {
            names.pop();
        } else {
            names.push(name);
        }
    });

    return '/' + names.join('/');
};

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
