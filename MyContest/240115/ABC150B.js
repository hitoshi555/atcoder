function main(input) {
    input = input.trim().split('\n');
    const N = Number(input[0])
    let str = input[1]
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === "A" && str[i + 1] === "B" && str[i + 2] === "C") {
            count++
        }
    }
    console.log(count)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));