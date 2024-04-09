function main(input) {
    input = input.trim().split('\n');
    let point = Number(input[0])
    if (90 <= point) {
        console.log("expert ")
    } else if (point < 40) {
        console.log(40 - point)
    } else if (point >= 40 && point < 70) {
        console.log(70 - point)
    } else if (point >= 70 && point < 90) {
        console.log(90 - point)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt