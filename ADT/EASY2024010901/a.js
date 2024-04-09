function main(input) {
    input = input.split('\n');
    input = input[0].split(" ")
    let num = Number(input.shift())
    let flag = true
    while (flag) {
        for (let i = 0; i < 3; i++) {
            num -= Number(input[i]);
            if (num < 0) {
                if (i === 0) {
                    console.log("F")
                    flag = false;
                    break;
                }
                if (i === 1) {
                    console.log("M")
                    flag = false;
                    break;
                }
                if (i === 2) {
                    console.log("T")
                    flag = false;
                    break;
                }
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt