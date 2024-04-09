function main(input) {
    input = input.split('\n');
    let array = input[0].split(" ").map(element => {
        return Number(element)
    });
    const A = array[0];
    const B = array[1];
    const C = array[2];
    const X = array[3];
    if (A >= X) {
        console.log("1.000000000000");
    } else {
        let num = B - A;
        if (B >= X) {
            let ans = C / num;
            console.log(ans)
        } else {
            console.log("0.000000000000")
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt