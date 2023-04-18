// Find the smallest and largest numbers in an array

function minMax(arr) {
    let result = [];
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    result.push(min);
    result.push(max);
    return result;
}