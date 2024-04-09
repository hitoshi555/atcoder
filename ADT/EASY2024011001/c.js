function main(input) {
    input = input.trim().split('\n');
    let N = Number(input.shift())
    let array = input.shift().split("");

    let T = [0, 0]
    let p = "right"

    for (let i = 0; i < N; i++) {
        if (array[i] === "S") {
            if (p === "right") { T[0]++ }
            else if (p === "south") { T[1]-- }
            else if (p === "left") { T[0]-- }
            else if (p === "north") { T[1]++ }
        }
        if (array[i] === "R") {
            if (p === "right") { p = "south" }
            else if (p === "south") { p = "left" }
            else if (p === "left") { p = "north" }
            else if (p === "north") { p = "right" }
        }
    }

    console.log(`${T[0]} ${T[1]}`)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt