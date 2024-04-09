function main(input) {
    input = input.trim().split('\n');
    const a = input.map(el => el.split("　"))
    const nums = a.map(el => Number(el[1])).sort((a, b) => {
        return a - b;
    })
    nums.forEach((element, a) => {
        console.log(element)
        let num = a + 1
        if (num % 5 === 0 && num !== 1) {
            console.log('-----------')
        }
    });
    console.log(nums.length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));