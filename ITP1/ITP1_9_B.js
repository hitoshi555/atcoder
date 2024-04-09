let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
    let str = input.shift();
    let count = input.shift();
    for (let j = 0; j < count; j++) {
        num = input.shift();
        str = shuffle_cards(str, num);
    }
    console.log(str);
}

function shuffle_cards(str, num) {
    return str.substr(num, str.length) + str.substr(0, num);
}
