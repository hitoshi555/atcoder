function main(input) {
    input = input.trim().split('\n');
    let N = Number(input[0])
    let ans = 0
    for (let i = 1; i <= N; i = i + 2) {
        let num_of_divisors = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                num_of_divisors++
            }
        }

        if (num_of_divisors === 8) {
            ans++
        }
    }
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));