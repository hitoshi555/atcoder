function main(input) {
    input = input.trim().split('\n');
    let N = Number(input[0])
    let count = 0;
    let array = [];
    for (let i = 0; i < N; i++) {
        array[i] = i + 1
    }

    for (let i = 0; i < N; i++) {
        let digits = array[i].toString().length;
        if (digits === 1 || digits === 3 || digits === 5) {
            count++
        }
    }

    console.log(count)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));