function main(input) {
    input = input.split('\n');
    let num =0;
    for(let i=0;i<input[0].length;i++){
        if(input[0][i] == "1"){
            num++;
        }
    }
    console.log(num);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));