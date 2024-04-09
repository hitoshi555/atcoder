function main(input) {
    let array = ["dream", "dreamer", "erase", "eraser",]
    input = input.split('\n');
    let inputReverse = input[0].split("").reverse().join("");
    let arrayReverse = array.map((element) => { return element.split("").reverse().join(""); });

    let flag = true;
    for (let i = 0; i < inputReverse.length;) {
        let flag2 = false;
        for (let j = 0; j < 4; j++) {
            let d = arrayReverse[j];
            if (inputReverse.substring(i, d.length + i) === d) {
                flag2 = true;
                i += d.length;
            }
        }
        if (!flag2) {
            flag = false
            break;
        }
    }
    console.log(flag ? "YES" : "NO");
    // Yes と No で WA をくらった
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));