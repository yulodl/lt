/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const contentPathsMap = {};
    paths.forEach(pathStr => {
        const [dir, ...nameContents] = pathStr.split(' ');
        nameContents.forEach(nameContent => {
            const [name, content] = nameContent.slice(0, nameContent.length - 1).split('(');
            const fullPath = dir + '/' + name;
            if (!contentPathsMap[content]) {
                contentPathsMap[content] = [fullPath];
                return;
            }

            contentPathsMap[content].push(fullPath);
        });
    });

    return Object.values(contentPathsMap).filter(paths => paths.length > 1);
};
