/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_bo

回答手順

解説見た後

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/24475797
*/

'use strict';
function Main(input) {
  input = input.split("\n");
  tmp = input[0].split(" ");
  N = eval("0o" + tmp[0] + "n");
  K = parseInt(tmp[1]);
  for (i = 0; i < K; i++) {
    N = N.toString(9);
    NSF = String(N).split("");
    // console.log(NSF)
    for (j = 0; j < NSF.length; j++) {
      if (NSF[j] === "8") NSF[j] = "5"
    }
    // console.log(NSF)
    N = eightbeet(NSF.join(""));
    // console.log(NSF)
    // N = eightbeet(NSF)
  }
  console.log(N.toString(8));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


function eightbeet(ponpontaro) {
  ponpontaro = eval("0o" + ponpontaro + "n");
  return ponpontaro;
}