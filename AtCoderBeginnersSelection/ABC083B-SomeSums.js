/*
問題
https://atcoder.jp/contests/abs/tasks/abc083_b

回答手順
for文回して
各桁を足す
条件に合う数値を一時保有する
答えに足して行く

解説見た後
while文の中で10で割りあまりを足していくことで
桁ごとの足し算ができる
受け取った合計を比較する
条件に通ったら答えに足していく

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#5-%E9%81%8E%E5%8E%BB%E5%95%8F%E7%B2%BE%E9%81%B8-10-%E5%95%8F

自分が書いたコード
コード長 : 591Byte
メモリ : 33508KB
実行時間 : 64ms

メモリが小さい
https://atcoder.jp/contests/abs/submissions/2264509
コード長 : 804Byte
メモリ : 7372G
実行時間 : 53ms

実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12523419
コード長 : 490Byte
メモリ : 31716KB
実行時間 : 49ms

コード長が一番短い
https://atcoder.jp/contests/abs/submissions/11223836
コード長 : 239Byte
メモリ : 10984KB
実行時間 : 79ms

parseIntしないと小数点が発生しうまくACにならなかった
実行時間が一番短い人のコードはMath.floor()を使っていた
Math.floor() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/

'use strict';

function findSumOfDigits(n) {
  let num = 0;
  while (n > 0) {
    num += n % 10;
    num = parseInt(num)
    n /= 10;
    n = parseInt(n)
  }

  return num;
}

function main(input) {
  const tmp = input.trim().split(" ").map(Number);
  const N = tmp[0];
  const A = tmp[1];
  const B = tmp[2];
  let total = 0;
  for (let i = 0; i <= N; i++) {
    let sum = findSumOfDigits(i);
    sum = parseInt(sum)
    if (sum >= A && sum <= B) {
      total += i;
    }
  }

  console.log(total)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));