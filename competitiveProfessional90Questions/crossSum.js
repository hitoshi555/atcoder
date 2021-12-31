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
*/

function main(input) {
  const args = input.split("\n").map((n) => n.split(" "));
  const n = args[0][0];
  const x = args[0][1];
  const v = args.slice(1, n + 1).map((n) => parseInt(n[0], 10));
  const p = args.slice(1, n + 1).map((n) => parseInt(n[1], 10));

  console.log(args); // [ [ '2', '10' ], [ '200', '5' ], [ '350', '3' ] ]
  console.log(n); // 2
  console.log(x); // 15
  console.log(v); // [ 200, 350 ]
  console.log(p); // [ 5, 3 ]
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));