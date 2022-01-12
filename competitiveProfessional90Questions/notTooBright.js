/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_ag

回答手順

解説見た後

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/27071756
https://atcoder.jp/contests/typical90/submissions/23282435
*/

"use strict";

function main(input) {
  const tmp = input.trim().split("\n");
  const [H, W] = tmp[0].split(" ").map(Number);

  if (H === 1 || W === 1) {
    return console.log(H * W);
  } else {
    const ans = Math.round(H / 2) * Math.round(W / 2);
    //Math.roud() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    //奇数の場合を考えてMath.round()で近似値を出している
    return console.log(ans);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
