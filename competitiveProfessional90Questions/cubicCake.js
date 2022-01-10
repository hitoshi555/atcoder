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

function gcd(...args) {
  var f = (a, b) => (b ? f(b, a % b) : a);
  var ans = args[0];
  for (var i = 1; i < args.length; i++) {
    ans = f(ans, args[i]);
  }
  return ans;
}

function Main(input) {
  input = input.split(" ");
  let A = BigInt(input[0]);
  //Bigint https://qiita.com/okumurakengo/items/a5cf08e764b6dfd7bf85
  let B = BigInt(input[1]);
  let C = BigInt(input[2]);

  let d = gcd(A, B, C);
  let ans = A / d + B / d + C / d - BigInt(3);

  console.log(String(ans));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//最大公約数 https://mebee.info/2021/04/26/post-26097/
// https://tech-blog.s-yoshiki.com/entry/63
//最大公約数の説明 https://qiita.com/drken/items/0c88a37eec520f82b788