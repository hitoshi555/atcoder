function main(input) {
    input = input.trim().split('\n');
    const N = Number(input.shift())
    const p = input.shift().split(" ").map(elm => Number(elm))
    const q = Number(input.shift())


    for (let i = 0; i < q; i++) {

        let [a, b] = input[i].split(" ").map(elm => Number(elm))

        let index1 = p.indexOf(a);
        let index2 = p.indexOf(b);

        let min = Math.min(index1, index2)
        console.log(p[min])
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../input.txt