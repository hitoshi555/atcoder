/*
問題
https://atcoder.jp/contests/abs/tasks/abc088_b
回答手順
入力を受け取る
配列にする
大きい順に並べる
交互に取る
最後に引き算する

解説見た後

自力で解けたか？
x

以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-6-%E5%95%8F--abc-088-b---card-game-for-two-200-%E7%82%B9

自分が書いたコード
コード長 : 454Byte
メモリ : 30708KB
実行時間 : 245ms

1.メモリが小さい
https://atcoder.jp/contests/abs/submissions/2325645
コード長 : 560Byte
メモリ : 7372KG
実行時間 : 55ms

2.実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/13983952
コード長 : 559Byte
メモリ : 29484KB
実行時間 : 44ms

3.コード長が一番短い
https://atcoder.jp/contests/abs/submissions/6231560
コード長 : 159Byte
メモリ : 7500KB
実行時間 : 53ms


forEach使えばよかったかな？？
*/

'use strict';

function main(input) {
  const tmp = input.trim().split('\n');
  const N = tmp.shift();
  const A = tmp[0].split(' ').map(Number);
  A.sort(function (a, b) {
    return b - a;
  });
  let Alice = 0;
  let Bob = 0;
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      Alice += A[i];
    } else {
      Bob += A[i];
    }
  }
  console.log(Alice - Bob);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));