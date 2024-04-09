function main(input) {
    input = input.trim().split('\n');
    console.log(input)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt