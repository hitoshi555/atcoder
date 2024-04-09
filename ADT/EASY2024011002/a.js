function main(input) {
    input = input.trim().split('\n');
    let array = input[0].split(" ").map(elm => Number(elm))
    if (array[0] < array[2]) {
        console.log("Takahashi")
    } else if (array[0] > array[2]) {
        console.log("Aoki")
    } else if (array[0] === array[2]) {
        if (array[1] < array[3]) {
            console.log("Takahashi")
        } else if (array[1] > array[3]) {
            console.log("Aoki")
        } else if (array[1] === array[3]) {
            console.log("Takahashi")
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt