/*
問題
https://atcoder.jp/contests/abs/tasks/abc081_a

回答手順
分割して
mapの中で判定して
1ずつ足して答えを出す。

解説見た後

自力で解けたか？
o
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/abs/submissions/2206284

自分が書いたコード
コード長 : 222Byte
メモリ : 29560KB
実行時間 : 56ms

メモリが小さい
https://atcoder.jp/contests/abs/submissions/2206284
コード長 : 419Byte
メモリ : 7372KG
実行時間 : 51ms

実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12176383
コード長 : 431Byte
メモリ : 29536KB
実行時間 : 45ms

コード長が一番短い
https://atcoder.jp/contests/abs/submissions/8552252
コード長 : 89Byte
メモリ : 7372KB
実行時間 : 52ms

*/

'use strict';

function main(input) {
  let num = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] == 1) {
      num++;
    }
  }
  console.log(num)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));