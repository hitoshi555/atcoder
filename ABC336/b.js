function main(input) {
    input = input.trim().split('\n');
    const N = Number(input[0])
    let str = N.toString(2)
    str = str.split('').reverse().join('')
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            count++
        } else {
            break;
        }
    }
    console.log(count);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
