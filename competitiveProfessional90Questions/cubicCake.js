/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_v

回答手順
??
解説見た後
辺a, b, cをrで割り切る。
つまりa,b,cの最大公約数
最大公約数はユークリッドの互助法を使ってできる。


自力で解けたか？
x
以下のユーザーが提出したコードを見た。

*/

'use strict'

function main(input) {
  const [a, b, c] = input.trim().split(' ').map(BigInt);
  const f = (m, n) => n ? f(n, m % n) : m;
  let l = f(a, b);
  l = f(l, c);
  const aCount = a / l;
  const bCount = b / l;
  const cCount = c / l;
  console.log(String(aCount + bCount + cCount - BigInt(3)));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));