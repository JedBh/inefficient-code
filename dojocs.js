// find the closest pair
const findClosestPair = (arr1, arr2, target) => {
    // sort array from small to large
    const sb = (a, b) => {
        return a - b;
    }
    // sort the arrays
    arr1.sort(sb);
    arr2.sort(sb);
    
    let diff = 0, closestDiff = target, dada = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            diff = target - (arr1[i] + arr2[j]);
            diff = Math.abs(diff);
            if (diff <= closestDiff) {
                closestDiff = diff;
                dada.push([i, j]);
            }
        }
    }
    let newArr = [];
    let lowestDiff = Math.abs((arr1[dada[dada.length - 1][0]] + arr2[dada[dada.length - 1][1]]) - target);
    for (let i = dada.length - 1; i >= 0; i--) {
        let sum = arr1[dada[i][0]] + arr2[dada[i][1]];
        diff = Math.abs(sum - target);
        if (diff === lowestDiff) {
            newArr.push([arr1[dada[i][0]], arr2[dada[i][1]]]);
        }
    }
    console.log(newArr);
}

// variables
let arr1 = [-1, 3, 8, 2, 5], arr2 = [4, -1, 2, 10, 5, 20];
let target = 1;

findClosestPair(arr1, arr2, target);
