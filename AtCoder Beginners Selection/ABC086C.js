// https://atcoder.jp/contests/abs/tasks/arc089_a

function main(input) {
    input = input.split('\n');
    let array = input.map(element => {
        return element.split(" ").map(element2 => {
            return Number(element2)
        })
    })
    let N = array.shift()
    array.unshift([0, 0, 0])

    let flag = true;
    for (let i = 0; i < N[0]; i++) {
        let dt = array[i + 1][0] - array[i][0];
        let dist = Math.abs(array[i + 1][1] - array[i][1]) + Math.abs(array[i + 1][2] - array[i][2])

        if (dt < dist) flag = false;
        if (dist % 2 != dt % 2) flag = false;
    }

    console.log(flag ? "Yes" : "No")
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));