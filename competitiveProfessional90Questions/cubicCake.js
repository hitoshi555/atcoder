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
https://atcoder.jp/contests/typical90/submissions/28344911
*/

'use strict'

function main(input) {
  const [a, b, c] = input.trim().split(' ').map(BigInt);
  //Bigint https://qiita.com/okumurakengo/items/a5cf08e764b6dfd7bf85
  const f = (m, n) => n ? f(n, m % n) : m;
  let l = f(a, b);
  l = f(l, c);
  const aCount = a / l;
  const bCount = b / l;
  const cCount = c / l;
  console.log(String(aCount + bCount + cCount - BigInt(3)));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//最大公約数 https://mebee.info/2021/04/26/post-26097/
// https://tech-blog.s-yoshiki.com/entry/63