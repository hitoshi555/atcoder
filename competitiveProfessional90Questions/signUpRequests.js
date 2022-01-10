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

*/

'use strict';

function main(input) {
  const args = input.split('\n');
  const num = args.shift();
  const user = args;
  const registered = []
  const answer = []
  user.forEach((element, index) => {
    if (registered.length === 0) {
      registered.push(element);
      answer.push(index + 1);
      return
    } else if (!registered.includes(element)) {
      registered.push(element);
      answer.push(index + 1);
      return
    }
  });

  console.log(answer.join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));