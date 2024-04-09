function main(input) {
    input = input.trim().split('\n');
    const N = Number(input.shift())
    let s = input.shift()
    const q = Number(input.shift())

    let mapping_from = "abcdefghijklmnopqrstuvwxyz"
    let mapping_to = "abcdefghijklmnopqrstuvwxyz"


    for (let i = 0; i < q; i++) {
        let [before, after] = input[i].split(" ")

        for (let i = 0; i < mapping_to.length; i++) {
            if (before === mapping_to[i]) {
                mapping_to = mapping_to.replace(mapping_to[i], after)
            }
        }
    }

    let ans = ""
    s.split("").forEach((elm, a) => {
        for (let i = 0; i < mapping_from.length; i++) {
            if (elm === mapping_from[i]) {
                ans = ans + mapping_to[i]
            }
        }
    })

    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));