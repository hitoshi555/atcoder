function main(input) {
    input = input.trim().split('\n');
    const [N, K] = input[0].split(" ").map(el => Number(el));

    let ans = 0;
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < K + 1; j++) {
            let num = Number(`${i}0${j}`)
            ans += num;
        }
    }
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 	B. AtCoder Condominium