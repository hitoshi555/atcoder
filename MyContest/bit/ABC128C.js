function main(input) {
    input = input.trim().split('\n');
    const [N, M] = input.shift().split(' ').map(elm => Number(elm));
    const p = input.pop().split(' ').map(elm => Number(elm));
    const S = [];
    for (let i = 0; i < M; i++) {
        S.push(input[i].split(' ').map(elm => Number(elm)))
    }

    let ans = 0;
    for (let i = 0; i < (1 << N); i++) {
        let dengen = new Array(N).fill(0)
        for (let j = 0; j < N; j++) {
            if (i & (1 << j)) {
                dengen[j] = 1;
            }
        }

        let denkyu = 0;
        for (let j = 0; j < M; j++) {
            let s = S[j].slice(1);
            let dengenCut = 0
            for (let k = 0; k < s.length; k++) {
                if (dengen[s[k] - 1] === 1) {
                    dengenCut++
                }
            }
            if (dengenCut % 2 === p[j]) {
                denkyu++
            }
        }

        if (denkyu === M) {
            ans++
        }

    }

    console.log(ans);
    //  console.log(S)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// ozakiyo0127 この人の解答を見て考えていた
// node ABC128C.js < ../../input.txt 