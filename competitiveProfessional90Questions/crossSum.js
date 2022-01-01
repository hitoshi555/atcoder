/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_d

H行W列の二次元配列を作る
a.行が１の総和を出す
b.列が１の総和を出す
上記２つをすべてやる
1行1列の場合 (a + b) - マスの数値
配列を作り直す

行列パターン2（〜n）
https://qiita.com/cotton11aq/items/a8b93d61fca8f83ffaae#%E8%A1%8C%E5%88%97%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B32n

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/27422747
*/


'use strict';
//strict modeとは何か?
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode

function main(input) {
  const args = input.trim().split('\n');
  //trim 空白を消してくらえる
  const [H, W] = args[0].split(' ').map(Number);
  const A = [];

  //----------------------点線部分のイメージがつかない
  for (let i = 0; i < H; i++)A[i] = args[i + 1].split(' ').map(Number);

  let sumRow = new Array(H).fill(0), sumCol = new Array(W).fill(0);

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      sumRow[i] += A[i][j];
      sumCol[j] += A[i][j];
    }
  }
  //------------------------

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      A[i][j] = sumRow[i] + sumCol[j] - A[i][j];
    }
  }

  return A.map(v => v.join(' ')).join('\n');
}

console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));