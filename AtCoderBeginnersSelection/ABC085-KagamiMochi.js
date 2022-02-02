/*
問題
https://atcoder.jp/contests/abs/tasks/abc085_b

回答手順
大きい順に並べて
フィルターで被っている数を取り除いて数を出す

解説見た後
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-7-%E5%95%8F--abc-085-b---kagami-mochi-200-%E7%82%B9

自力で解けたか？
o
以下のユーザーが提出したコードを見た。

自分が書いたコード
コード長 : 324Byte
メモリ : 29396KB
実行時間 : 56ms

1.メモリが小さい
https://atcoder.jp/contests/abs/submissions/2225249
コード長 : 233Byte
メモリ : 7372KG
実行時間 : 54ms
Set().sizeで重複する数の除去と個数を受け取っている

2.実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12193107
コード長 : 267Byte
メモリ : 29508KB
実行時間 : 44ms

3.コード長が一番短い
https://atcoder.jp/contests/abs/submissions/21574010
コード長 : 100Byte
メモリ : 29612KB
実行時間 : 56ms


*/

"use strict";

function main(input) {
  const tmp = input.trim().split("\n").map(Number);
  //const N = tmp.shift();
  //Nは使っていないためshiftだけでよい
  tmp.shift();
  const A = tmp.sort(function (a, b) {
    return b - a;
  });

  const uniqueArr = [...new Set(A)];
  //Set() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
  // https://www.delftstack.com/ja/howto/javascript/javascript-remove-duplicates-from-an-array/

  console.log(uniqueArr.length);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
