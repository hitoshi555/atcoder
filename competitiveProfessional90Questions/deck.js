/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_bi

回答手順
受け取った値を配列にする
山札、出力の配列を用意する
Qを定数にする
Qを抜かした配列を作る
tによる条件式を作る
条件にしたがって操作して出力する

解説見た後

自力で解けたか？
o
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/24466892
*/

'use strict';

function main(input) {
  const args = input.trim().split('\n');
  const Q = args.shift();
  //for文でQを使う
  //for文の中でif文を使いanserに追加する.
  const array = args.map(v => v.split(' ').map(Number));
  const deck = [];
  const answer = [];
  array.forEach(e => {
    if (e[0] === 1) {
      deck.unshift(e[1]);
    } else if (e[0] === 2) {
      deck.push(e[1]);
    } else if (e[0] === 3) {
      answer.push(deck[e[1] - 1]);
    }
  });

  console.log(answer.join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));