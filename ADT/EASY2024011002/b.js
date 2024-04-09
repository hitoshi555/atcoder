function nthReplace(str, n, after) {
    return str.substr(0, n - 1) + after + str.substr(n);
};

function main(input) {
    input = input.trim().split('\n');
    let N = input[0].length
    let str = input[0]
    for (let i = 0; i < N / 2; i++) {
        if (i === 0) {
            let a = input[0][0]
            let b = input[0][1]
            console.log("a:" + a)
            console.log("b:" + b)
            console.log("str:" + str)
            str = nthReplace(str, 0, b);
            str = nthReplace(str, 1, a);
            console.log("str:" + str)
        } else {
            let a = input[0][2 * i - 1]
            let b = input[0][2 * i]
            str[0][2 * i - 1] = b;
            str[0][2 * i] = a;
        }
    }
    console.log(str)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));