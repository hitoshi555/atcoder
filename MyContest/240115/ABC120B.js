// min の約数を並べてから
// max の約数を調べるとうまくいかなかった

function compareFunc(a, b) {
    return b - a;
}

function main(input) {
    input = input.trim().split('\n');
    let [A, B, K] = input[0].split(" ").map(elm => Number(elm))
    let array = []
    let min = Math.min(A, B);
    let max = Math.max(A, B);
    let array2 = []
    for (let i = 1; i < max + 1; i++) {
        if (max % i === 0) {
            array.push(i)
        }
    }
    array = array.sort(compareFunc)
    for (let i = 1; i < array.length + 1; i++) {
        if (min % array[i - 1] === 0) {
            array2.push(array[i - 1])
        }
    }
    console.log(array2[K - 1])
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));