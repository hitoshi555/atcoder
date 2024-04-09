function main(input) {
    input = input.trim().split('\n');
    let N = Number(input[0])
    let flagA = false;
    let flagB = false;
    let flagC = false;

    for (let i = 0; i < N; i++) {
        if (input[1][i] === "A") flagA = true;
        if (input[1][i] === "B") flagB = true;
        if (input[1][i] === "C") flagC = true;

        if (flagA && flagB && flagC) {
            console.log(i + 1);
            break;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt