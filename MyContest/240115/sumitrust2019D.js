function main(input) {
    input = input.trim().split('\n');
    let n = Number(input[0])
    let s = input[1]

    let ans = 0;
    for (let i = 0; i < 1000; i++) {
        let t = i.toString().padStart(3, '0');
        let si = 0;
        let ti = 0;

        while (si < n && ti < 3) {
            if (s[si] == t[ti]) {
                si++;
                ti++;
            } else {
                si++;
            }
        }
        if (ti === 3) {
            ans++;
        }
    }
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 下記記事を参考にした
// https://zenn.dev/wapa5pow/articles/sumitrust2019-d-8d88ebe64f86d5d22bd4
// node sumitrust2019D.js < ../../input.txt