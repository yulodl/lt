/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const ans = [];
    const isLeftWall = ([x, idx]) => x === buildings[idx][0];
    const walls = buildings
        .flatMap(([x1, x2], i) => [[x1, i], [x2, i]])
        .sort((a, b) => {
            return  (a[0] - (isLeftWall(a) ? 0.5 : 0)) - (b[0] - (isLeftWall(b) ? 0.5 : 0))
        });
    // console.log(walls);
    const openMap = {};
    let currHeight = 0;
    for (let i=0; i<walls.length; i++) {
        const [x, idx] = walls[i];
        const height = buildings[idx][2];
        const isLeft = isLeftWall(walls[i]);
        if (isLeft) {
            openMap[idx] = height;
            if (height > currHeight) {
                if (ans.length && x === ans[ans.length - 1][0]) {
                    ans.pop();
                }

                ans.push([x, height]);
                currHeight = height;
            }
        } else {
            Object.keys(openMap).forEach((idx) => {
                if (x === buildings[idx][1]) {
                    delete openMap[idx];
                }
            });
            const openedHeights = Object.values(openMap);
            const nextHeight = openedHeights.length ? Math.max(...openedHeights) : 0;
            if (nextHeight !== currHeight) {
                ans.push([x, nextHeight]);
                currHeight = nextHeight;
            }
        }
    }

    return ans;
};

console.log(getSkyline([[4,9,10],[4,9,15],[4,9,12],[10,12,10],[10,12,8]]));
console.log(getSkyline([[1,2,1],[1,2,2],[1,2,3]]));
console.log(getSkyline([[0,2,3],[2,5,3]]));
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
