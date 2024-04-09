function main(input) {
    input = input.trim().split('\n');
    const [A, B, C] = input[0].split(" ").map(el => Number(el));

    let s = `${A}${B}${C}`
    s = s.replace("5", "");
    s = s.replace("5", "");
    s = s.replace("7", "");

    if (A + B + C === 17 && s.length === 0) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 	A. Iroha and Haiku (ABC Edition)