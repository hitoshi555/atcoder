function main(input) {
    input = input.trim().split('\n');
    let S = input.shift()

    let Split = false;
    if (S[0] === "1") {
        console.log("No")
        return;
    }

    for (let i = 0; i < S.length; i++) {
        let num = i + 1;
        if (S[i] === "1") {
            if (num === 2 || num === 8) {
                if (S[3] === "0" && S[4] === "0") {
                    Split = true;
                    break;
                }
            }
            if (num === 3 || num === 9) {
                if (S[4] === "0" && S[5] === "0") {
                    Split = true;
                    break;
                }
            }
            if (num === 4) {
                if (S[6] === "0" && S[7] === "0" && S[1] === "0") {
                    Split = true;
                    break;
                }
            }
            if (num === 5) {
                if (S[1] === "0" && S[2] === "0" && S[7] === "0" && S[8] === "0") {
                    Split = true;
                    break;
                }
            }
            if (num === 6) {
                if (S[2] === "0" && S[8] === "0" && S[9] === "0") {
                    Split = true;
                    break;
                }
            }
        }
    }

    if (Split) {
        console.log("Yes")
        return;
    } else {
        console.log("Noooo")

        console.log("No")
        return;
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));