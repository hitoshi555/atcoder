function main(input) {
    input = input.trim().split('\n');
    const text = input[0]
    const first = text[0]
    const secound = text[1]
    const third = text[2]

    tmp = text.split('');
    tmp = tmp.filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });

    if (first !== secound) {
        if (
            first === third
        ) {
            console.log(2)
        } else {
            console.log(1)
        }
    } else {
        const num1 = text.indexOf(tmp[0])
        const num2 = text.indexOf(tmp[1])
        const max = Math.max(num1, num2)
        console.log(max + 1)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../input.txt