/*
問題
https://atcoder.jp/contests/abs/tasks/arc065_a

回答手順
一文字ずつ分解して...?

解説見た後

自力で解けたか？
x

以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-9-%E5%95%8F--abc-049-c---daydream-300-%E7%82%B9

自分が書いたコード
コード長 : Byte
メモリ : KB
実行時間 : ms

1.メモリが小さい
https://atcoder.jp/contests/abs/submissions/2907237
コード長 : 418Byte
メモリ : 7372KG
実行時間 : 52ms

2.実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12869884
コード長 : 278Byte
メモリ : 29852KB
実行時間 : 45ms

3.コード長が一番短い
https://atcoder.jp/contests/abs/submissions/4118255
コード長 : 124Byte
メモリ : 9420KB
実行時間 : 55ms

【キーポイント】
・Greedy アルゴリズム
・端から決まって行く Greedy アルゴリズム
・後ろから解く
*/

"use strict";

function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  var input = input.trim();
  // 入力値を受け取る
  console.log(/^(dream|dreamer|eraser|erase)+$/.test(input) ? "YES" : "NO");
  // test() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  // 正規表現と指定された文字列の一致を調べる
  // true or falseを返している。
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
