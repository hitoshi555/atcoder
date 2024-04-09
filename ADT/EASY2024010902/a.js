function main(input) {
    input = input.trim().split('\n');
    const N = Number(input[0])
    if (N < 42) {
        let num = N;
        var ret = ('000' + num).slice(-3);
        console.log(`AGC${ret}`)
    } else {
        let num = N + 1
        var ret = ('000' + num).slice(-3);
        console.log(`AGC${ret}`)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt