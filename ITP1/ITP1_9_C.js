let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let N = Number(input.shift())

let t = 0;
let h = 0;
for (let i = 0; i < N; i++) {
    let cards = input[i].split(" ");
    if (cards[0] === cards[1]) {
        t += 1;
        h += 1;
    } else if (cards[0] > cards[1]) {
        t += 3;
    } else if (cards[0] < cards[1]) {
        h += 3;
    }
}

console.log(`${t} ${h}`)