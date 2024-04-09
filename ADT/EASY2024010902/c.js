// C - Election

function main(input) {
    input = input.trim().split('\n');
    let num = Number(input.shift())
    let array = []
    for (let i = 0; i < num; i++) {
        let index = array.find(({ name }) => name === input[i])
        if (index) {
            index.count++
        } else {
            array.push({ name: input[i], count: 1 })
        }
    }
    let c = array.map(function (p) {
        return p.count;
    });
    console.log(Math.max.apply(null, c))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));