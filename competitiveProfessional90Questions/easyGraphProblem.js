/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_bz

回答手順

解説見た後
隣接するリストを作る
隣接する頂点の数が小さかったら+1
隣接する頂点が1だったら答えに+1
最後出力する

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/28429877
*/

'use strict';

function main(input) {
  const args = input.trim().split('\n');
  const [N, M] = args[0].split(' ').map(Number);
  const graph = Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    const [a, b] = args[i].split(' ').map(Number)
    if (a > b) graph[a]++
    else graph[b]++
  }

  let ans = 0
  for (let i = 1; i <= N; i++) {
    if (graph[i] === 1) ans++
  }
  console.log(ans.toString())
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));