/*
問題
https://atcoder.jp/contests/abs/tasks/abc087_b

回答手順

解説見た後
for文で全探索

自力で解けたか？
x

以下のユーザーが提出したコードを見た。

自分が書いたコード
コード長 : 425Byte
メモリ : 32572KB
実行時間 : 60ms

メモリが小さい
https://atcoder.jp/contests/abs/submissions/2206357
コード長 : 596Byte
メモリ : 7372KG
実行時間 : 52ms

実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12186288
コード長 : 662Byte
メモリ : 32360KB
実行時間 : 49ms

コード長が一番短い
https://atcoder.jp/contests/abs/submissions/8930110
コード長 : 274Byte
メモリ : 10956KB
実行時間 : 79ms
*/

'use strict';

function main(input) {
  const tmp = input.split('\n');
  let res = 0;
  for (let a = 0; a <= tmp[0]; a++) {
    for (let b = 0; b <= tmp[1]; b++) {
      for (let c = 0; c <= tmp[2]; c++) {
        let total = 500 * a + 100 * b + 50 * c;
        if (total == tmp[3]) {
          res++
        }
      }
    }
  }
  console.log(res);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));