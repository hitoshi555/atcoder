function main(input) {
    input = input.trim().split('\n');
    let [N, M] = input.shift().split(" ").map(elm => Number(elm))
    console.log(N, M)
    let array = [];
    for (let i = 0; i < N; i++) {
        // オブジェクト配列からkeyでiを探す
        // 見つかったら
        // city[]に都市の数字を足す
        // 見つからなかったら
        // keyとcityを入れたオブジェクトを追加する
    }
    // forを回して
    // city の重複を取る
    // 昇順(小さいもの順に並べる)

    // forを回して
    // cityの合計 cityの数字を表示する
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// node a.js < ../../input.txt