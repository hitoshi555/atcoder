function main(input) {
    input = input.trim().split('\n');
    input = input[0].split(" ");
    let A = Number(input[0])
    let B = Number(input[1])
    let C = Number(input[2])
    let X = Number(input[3])
    let Y = Number(input[4])

    let ans = 0
    let p = Math.min(X, Y)

    if (A + B < 2 * C) {
        ans += (A + B) * p
        X -= p
        Y -= p
    } else {
        ans += 2 * C * p
        X -= p
        Y -= p
    }

    if (X > 0) {
        ans += Math.min(A, C * 2) * X
    }
    if (Y > 0) {
        ans += Math.min(B, C * 2) * Y
    }

    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node ABC095C.js < ../../input.txt