function main(input) {
    input = input.split('\n');
    let numArray = input[1].split(" ").forEach(element => {
        return Number(element)
    });;

    console.log(numArray);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));