function main(input) {
    input = input.split('\n')[0].split(' ');
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let mul = a * b;
    if(mul % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    };
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));