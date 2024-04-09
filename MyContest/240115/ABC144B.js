function main(input) {
    input = input.trim().split('\n');
    let N = Number(input[0])
    let ans = false;
    for (let i = 1; i < 10; i++) {
        if (N % i === 0) {
            if (N / i < 10) {
                ans = true;
                break;
            }
        }
    }
    console.log(ans ? "Yes" : "No")
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));