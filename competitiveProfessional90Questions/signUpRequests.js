/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_aa

回答手順
ユーザー名だけの配列作る
ユーザー名と登録者名の配列を比べる
一致するユーザーがいないなら登録者名に追加する
解説見た後
map https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
mapを使いこなすと計算量を下げることができる
なぜ??
データの番地が文字列でもアクセルできるため、文字列を探すことによって
計算量がO(NlogN)にすることができる。
自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/27474415
*/

'use strict';

const main = arg => {
  const input = arg.trim().split("\n");
  //trim()で前後の空白を削除し、改行ごとに文字列の配列にする
  const n = parseInt(input[0])
  //先頭の数を取る
  const map = {}
  //キーが数字以外もできるため計算量の削減になる
  const result = []
  for (let i = 1; i <= n; i++) {
    if (map[input[i]]) {
      continue
      //mapにキーが存在していたら次の繰り返し処理を行う
    } else {
      map[input[i]] = 1
      result.push(i)
      //mapにキーが存在していなかったら要素が1を追加する
      //1はifではtrueであるため
      //配列に答えを追加する
    }
  }
  console.log(result.join('\n'))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));