function main(input) {
    input = input.trim().split('\n');
    let [N, X] = input[0].split(" ").map(el => Number(el))
    const S = input[1]

    for (let i = 0; i < S.length; i++) {
        if (S[i] === "o") {
            X++
        } else if (S[i] === "x" && X !== 0) {
            X--
        }
    }

    console.log(X)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// B. Quizzes