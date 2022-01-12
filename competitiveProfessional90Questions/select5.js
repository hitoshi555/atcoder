/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_bc

回答手順

解説見た後

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://github.com/E869120/kyopro_educational_90/blob/main/sol/055.cpp
*/

"use strict";

function main(input) {
  const tmp = input.trim().split('\n');
  const [N, P, Q] = tmp[0].split(' ').map(v => parseInt(v, 10));
  const p = BigInt(P)
  const num = tmp[1].split(' ').map(BigInt);
  let ans = 0;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < i; ++j) {
      for (let k = 0; k < j; ++k) {
        for (let l = 0; l < k; ++l) {
          for (let m = 0; m < l; ++m) {
            if (num[i] * num[j] % p * num[k] % p * num[l] % p * num[m] % p == Q) {
              ++ans;
            }
          }
        }
      }
    }
  }
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
