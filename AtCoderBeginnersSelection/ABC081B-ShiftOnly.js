/*
問題
https://atcoder.jp/contests/abs/tasks/abc081_b

回答手順

解説見た後
while文で回して
for文内で確認
もう一つのfor文で割り算と代入
while文から出たら出力

自力で解けたか？
x

以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-3-%E5%95%8F--abc-081-b---shift-only-200-%E7%82%B9

自分が書いたコード
コード長 : 524Byte
メモリ : 29520KB
実行時間 : 57ms

メモリが小さい
https://atcoder.jp/contests/abs/submissions/2211750
コード長 : 622Byte
メモリ : 7372KG
実行時間 : 54ms
callback使っている

実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/12609986
コード長 : 632Byte
メモリ : 29636KB
実行時間 : 44ms

コード長が一番短い
https://atcoder.jp/contests/abs/submissions/8111956
コード長 : 181Byte
メモリ : 11468KB
実行時間 : 97ms

線形探索を極める！ 〜 for 文で色んなことができることを知る 〜
https://qiita.com/drken/items/fdae15f6e9ede543b97a
*/

'use strict';

function main(input) {
  const tmp = input.split("\n");
  const N = tmp.shift();
  const A = tmp[0].split(" ").map(Number)
  let res = 0;

  while (true) {
    // while https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/while
    let exist_odd = false;
    for (let i = 0; i < N; i++) {
      if (A[i] % 2 != 0) {
        exist_odd = true;
        break;
      }
    }

    if (exist_odd) break;

    for (let i = 0; i < N; i++) {
      A[i] /= 2;
    }

    ++res;
    // インクリメント演算子でn++と書いたときに加算前の値が返されるのは、JavaScriptの仕様です。
    // 加算した後の値を参照したい場合、++nと書く必要があります。
  }

  console.log(res)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));