function main(input) {
    input = input.trim().split('\n');
    const N = Number(input.shift())
    console.log(N)
    console.log(input)
    let shougen = new Array(N).fill([])
    for (let i = 0; i < N; i++) {
        const a = Number(input.shift())
        for (let j = 0; j < a; j++) {
            const [x, y] = input.shift().split(" ").map(elm => Number(elm))
            shougen[i].push([a, x, y])
        }
        // 証言が0の場合
        //shougen.push([a, x, y])
    }

    console.log("shougen:", shougen)

    // for (let i = 0; i < (1 << N); i++) {
    //     // console.log(i);
    //     let full = new Array(N).fill(0)
    //     for (let j = 0; j < N; j++) {
    //         if (i & (1 << j)) {
    //             full[j] = 1;
    //         }
    //     }


    //     console.log(full)
    // }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// https://atcoder.jp/contests/abc147/tasks/abc147_c