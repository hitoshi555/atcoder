/*
問題
https://atcoder.jp/contests/abs/tasks/abc086_a

回答手順
標準入力を受け取る
a, bの積を出す
2で割ってあまりが1か0で偶数、基数を判断する
奇数-> Odd
偶数-> Even


解説見た後
一番メモリを使わないコードはこのコードの1/3ほどだった。

自力で解けたか？
o
以下のユーザーが提出したコードを見た。

類題
ABC 064 A - RGB Cards　(同じく倍数判定です)
ABC 088 A - Infinite Coins　(倍数判定の発展として、余りを計算します)
ABC 157 A - Duplex Printing　(余りを切り上げる処理をします)
*/

'use strict';

function main(input) {
  const tmp = input.split(' ').map(Number);
  const product = tmp[0] * tmp[1];
  product % 2 === 0 ? console.log('Even') : console.log('Odd');
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));