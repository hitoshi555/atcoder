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

自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/27422747
*/


'use strict';
//strict modeとは何か?
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode

function main(input) {
  const args = input.trim().split('\n');
  //trim() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  //split() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
  /*
  前後の空白を取り除く
  改行ごとに文字列の配列に分割
  argsに代入
  */

  const [H, W] = args[0].split(' ').map(Number);
  //分割代入 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  /*
  配列中の0番目の要素を空白で文字列の配列に分割
  map()で要素をnumberに変えて新たな配列を作成
  H, Wに分割代入
  */
  const A = [];

  for (let i = 0; i < H; i++)A[i] = args[i + 1].split(' ').map(Number);
  /*
  args[1]以降の要素を空白区切りで文字列の配列に分割
  分割された文字列の配列から数値に変更した配列を作成
  Aに追加する 
  */


  let sumRow = new Array(H).fill(0), sumCol = new Array(W).fill(0);
  //fill() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  /*
  要素数がH個ですべての要素が0の配列sumRowを作成
  要素数がW個ですべての要素が0の配列sumColを作成
  */

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      sumRow[i] += A[i][j];
      //横の合計を作成
      sumCol[j] += A[i][j];
      //縦の合計を作成
    }
  }


  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      A[i][j] = sumRow[i] + sumCol[j] - A[i][j];
      //配列Aに指定したマスと同じ行と列の合計から自身の数値を引いて、答えの要素を作成
    }
  }

  return A.map(v => v.join(' ')).join('\n');
  //join() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  //map()で配列のすべての要素を呼び出す
  //map()で呼び出されたすべての要素に空白をつけ文字列を作成
  //map()で作成された新たな配列に対して改行をつけて文字列を作成
}

console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));