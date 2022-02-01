/*
問題
https://atcoder.jp/contests/abs/tasks/abc085_b

回答手順
大きい順に並べて
フィルターで被っている数を取り除いて数を出す

解説見た後
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-7-%E5%95%8F--abc-085-b---kagami-mochi-200-%E7%82%B9

自力で解けたか？

以下のユーザーが提出したコードを見た。

自分が書いたコード
コード長 : Byte
メモリ : KB
実行時間 : ms

1.メモリが小さい

コード長 : Byte
メモリ : KG
実行時間 : ms

2.実行時間が一番短い

コード長 : Byte
メモリ : KB
実行時間 : ms

3.コード長が一番短い

コード長 : Byte
メモリ : KB
実行時間 : ms


*/

"use strict";

function main(input) {
  const tmp = input.trim().split("\n").map(Number);
  const N = tmp.shift();
  const A = tmp.sort(function (a, b) {
    return b - a;
  });

  const uniqueArr = [...new Set(A)];
  //Set() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
  // https://www.delftstack.com/ja/howto/javascript/javascript-remove-duplicates-from-an-array/

  console.log(uniqueArr.length);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
