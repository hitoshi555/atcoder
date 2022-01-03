/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_j

回答手順
標準入力を受け取る
学校の生徒数が0番目と質問数が学校の生徒数+1の場所にある
これを受け取る
質問を全部見て
答えを出す

解説見た後
標準入力を受け取る
1組の和を順番に足した配列を作成する(累積和)
2組の和を順番に足した配列を作成する(累積和)
質問の何番目から何番目を一つづつ計算していく -> 学籍番号が2から6の１組の生徒の合計得点は S6 - S1のようになる
答えの配列に入れる
標準出力に出す


自力で解けたか？
x
以下のユーザーが提出したコードを見た。

*/

'use strict';

function main(input) {

}

console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));