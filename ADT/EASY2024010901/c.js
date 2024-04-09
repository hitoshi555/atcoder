function main(input) {
    input = input.split("\n")
    const N = Number(input[0]);
    let str = ""
    for (let i = 0; i < N; i++) {
        if (input[1][i] === "n" && input[1][i + 1] === "a") {
            str += "nya";
            i++
        } else {
            str += input[1][i]
        }
    }
    console.log(str);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));