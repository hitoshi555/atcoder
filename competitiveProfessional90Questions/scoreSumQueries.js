/*
問題
https://atcoder.jp/contests/typical90/tasks/typical90_j

回答手順
標準入力を受け取る
学校の生徒数が0番目と質問数が学校の生徒数+1の場所にある
これを受け取る
質問を全部見て
答えを出す

解説見た後
標準入力を受け取る
1組の和を順番に足した配列を作成する(累積和)
2組の和を順番に足した配列を作成する(累積和)
質問の何番目から何番目を一つづつ計算していく -> 学籍番号が2から6の１組の生徒の合計得点は S6 - S1のようになる
答えの配列に入れる
標準出力に出す


自力で解けたか？
x
以下のユーザーが提出したコードを見た。
https://atcoder.jp/contests/typical90/submissions/28333933
*/

'use strict';

function main(input) {
  const tmp = input.trim().split('\n');
  //前後の空白を削除して改行ごとに分割し文字列の配列にする
  const N = Number(tmp.shift());
  //shift() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
  //最初の要素を取り除き、numberに変換してNに代入
  const students = tmp.splice(0, N);
  //0からN番目まで取り除きstudentsに代入する。
  const questions = tmp.slice(1);
  //tmpには質問数と質問の要素しか残っていないため1番目から終わりまでをquestionsに代入する。

  const c1Sum = [0];
  const c2Sum = [0];
  //最初の要素に0を入れた配列を2つ用意する。

  for (let s of students) {
    //for...of https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of#examples
    const student = s.split(' ').map(Number);
    //空白で区切り分割し文字列の配列にする。
    //mapで要素をnumberに直す。
    const c1Prev = c1Sum[c1Sum.length - 1];
    const c2Prev = c2Sum[c2Sum.length - 1];
    //一つ前の要素を取る
    //c1Sum.length > 1 よって c1Sum.length - 1も0以上になる
    if (student[0] == 1) {
      c1Sum.push(c1Prev + student[1]);
      c2Sum.push(c2Prev)
    } else if (student[0] == 2) {
      c1Sum.push(c1Prev);
      c2Sum.push(c2Prev + student[1]);
    }
    //要素を判定しそれぞれの点数の配列を作成する。
  }

  const results = [];
  for (let q of questions) {
    const [st, ed] = q.split(' ').map(Number);
    //分割代入で期間の始まりと終わりの数値を取る
    let c1Ans = c1Sum[ed] - c1Sum[st - 1];
    let c2Ans = c2Sum[ed] - c2Sum[st - 1];
    results.push(`${c1Ans} ${c2Ans}`);
    //配列に追加する。
  }

  console.log(results.join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

/*
要素数や中身が不確定なときは扱いづらい
let sumRow = new Array(H).fill(0)
元の配列に足すので要素が決まっていないときに使いやすい
results.push(`${c1Ans} ${c2Ans}`);
*/