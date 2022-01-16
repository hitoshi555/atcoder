/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_bo

回答手順

解説見た後

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/24475797
https://atcoder.jp/contests/typical90/submissions/28432142
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const lines = input.split('\n')
let [N, K] = lines[0].split(' ')
K = Number(K)

const fromN = (S, N) => {
  let v = 0n
  for (let i = 0; i < S.length; i++) {
    v += BigInt(S[i]) * BigInt(N) ** BigInt((S.length - i - 1))
  }
  return v
}

let ans = N
for (let i = 0; i < K; i++) {
  //K回操作を繰り返す
  ans = fromN(ans, 8)
  ans = ans.toString(9)
  // toString() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  //NumberオブジェクトではtoString()メソッドで指定された基数で表した文字列を返すことができる。
  ans = ans.replace(/8/g, '5')
  // replace() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  //正規表現 / /gでグローバル検索を行い
  //8を5に変換する
}
console.log(ans)