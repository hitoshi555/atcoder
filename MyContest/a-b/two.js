function main(input) {
    input = input.trim().split('\n');
    const X = Number(input[0]);

    let p = BigInt(100);
    let step = 0;
    while (p < X) {
        let num = p / BigInt(100)
        p += num
        step++
    }
    console.log(step);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// B. 1%