// https://atcoder.jp/contests/abc251/tasks/abc251_b

function main(input) {
    input = input.trim().split("\n")
    const [N, W] = input.shift().split(" ").map(elm => Number(elm))
    console.log(N, W);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
