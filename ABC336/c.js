function main(input) {
    input = input.trim().split('\n');
    let N = Number(input[0])
    // N-- // このマイナス1が思いつかなかった...
    let str = N.toString(5)
    let array = [0, 2, 4, 6, 8]
    let ans = ""
    for (let i = 0; i < str.length; i++) {
        ans += array[str[i]]
    }
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));