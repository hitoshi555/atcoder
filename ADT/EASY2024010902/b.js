function compare(a, b) {
    return b - a;
}

function main(input) {
    input = input.trim().split('\n');
    let users = input[1].split(" ").map(elm => Number(elm))
    let first = users.shift()
    users.sort(compare);
    let max = users[0]
    let sum = max + 1 - first

    console.log(Math.max(0, sum))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));