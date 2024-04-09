function main(input) {
    input = input.split('\n');
    let a = parseInt(input[0]);
    let b = parseInt(input[1].split(' ')[0]);
    let c = parseInt(input[1].split(' ')[1]);
    let s = input[2];
    console.log(`${a+b+c} ${s}`);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));