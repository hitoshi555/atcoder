function main(input) {
    input = input.trim().split('\n');
    const [a, b, x] = input[0].split(" ").map(el => Number(el))

    if (a <= x && a + b >= x) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// A. Cats and Dogs