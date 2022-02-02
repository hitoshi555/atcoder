/*
問題
https://atcoder.jp/contests/abs/tasks/abc085_c
回答手順
for文でネストする

解説見た後

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-8-%E5%95%8F--abc-085-c---otoshidama-300-%E7%82%B9

自分が書いたコード
コード長 : 538Byte
メモリ : 32460KB
実行時間 : 75ms

1.メモリが小さい
https://atcoder.jp/contests/abs/submissions/2212468
コード長 : 1242Byte
メモリ : 62KG
実行時間 : 7372ms

2.実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/14135044
コード長 : 632Byte
メモリ : 32180KB
実行時間 : 49ms

3.コード長が一番短い
https://atcoder.jp/contests/abs/submissions/11250231
コード長 : 266Byte
メモリ : 7372KB
実行時間 : 61ms


*/

'use strict';

function main(input) {
  let A = -1;
  let B = -1;
  let C = -1;
  const tmp = input.trim().split(' ').map(num => parseInt(num, 10));
  const N = tmp[0];
  const T = tmp[1];
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j + i <= N; j++) {
      let k = N - i - j;
      let total = 10000 * i + 5000 * j + 1000 * k;
      if (total === T) {
        A = i;
        B = j;
        C = k;
      }
    }
  }
  console.log(`${A} ${B} ${C}`)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));