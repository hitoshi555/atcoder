function main(input) {
    input = input.trim().split('\n');
    let str = input[[0]]
    let array = ["A", "C", "G", "T"];
    let currentValue = 0;
    let maxValue = 0;
    for (let i = 0; i < str.length; i++) {
        if (array.includes(str[i])) {
            currentValue++;
            maxValue = Math.max(maxValue, currentValue)
        } else {
            currentValue = 0;
        }
    }

    console.log(maxValue);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));