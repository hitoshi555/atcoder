function main(input) {
    input = input.trim().split('\n');

    const a = ["oxx", "xox", "xxo"];
    const b = input[0]


    let noFlag = true;
    for (let i = 0; i < a.length; i++) {
        let flag = true;
        for (let j = 0; j < b.length; j++) {
            if (a[i][j % 3] !== b[j]) {
                flag = false;
            }
        }
        if (flag) {
            noFlag = false;
            console.log("Yes")
            break
        }
    }

    if (noFlag) {
        console.log("No")
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// B - Triple Metre