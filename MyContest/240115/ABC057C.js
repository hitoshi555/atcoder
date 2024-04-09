function main(input) {
    input = input.trim().split('\n');
    const N = Number(input[0])
    let ans = N.toString().length;
    // < と <= の違いでWAがあった
    for (let a = 1; a * a <= N; a++) {
        if (N % a !== 0) continue;

        const b = N / a

        const digits = Math.max(a.toString().length, b.toString().length);
        if (ans > digits) ans = digits

    }
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node sumitrust2019D.js < ../../input.txt