function main(input) {
    input = input.trim().split('\n');
    const N = Number(input[0])
    let str = ""
    for (let i = 0; i < N; i++) {
        str += "o"
    }
    console.log(`L${str}ng`)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt