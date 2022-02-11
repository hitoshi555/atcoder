/*
問題
https://atcoder.jp/contests/abs/tasks/arc089_a

回答手順

解説見た後

自力で解けたか？
x

以下のユーザーが提出したコードを見た。
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E7%AC%AC-10-%E5%95%8F--abc-086-c---traveling-300-%E7%82%B9
実行時間が一番速い人を見た
https://atcoder.jp/contests/abs/submissions/2212945

自分が書いたコード
コード長 : Byte
メモリ : KB
実行時間 : ms

1.メモリが小さい
https://atcoder.jp/contests/abs/submissions/5333043
コード長 : 909Byte
メモリ : 15404KG
実行時間 : 158ms

2.実行時間が一番短い
https://atcoder.jp/contests/abs/submissions/2212945
コード長 : 1392Byte
メモリ : 24840KB
実行時間 : 97ms

3.コード長が一番短い
https://atcoder.jp/contests/abs/submissions/11318216
コード長 : 210Byte
メモリ : 50684KB
実行時間 : 700ms

【キーポイント】
・パリティ 「偶数」と「奇数」に関する性質
*/

function Main(inputData) {
  init(inputData);

  var n = inI(), nt = 0, nx = 0, ny = 0;

  for (i = 0; i < n; i++) {
    var t = inI(), x = inI(), y = inI();

    var r = Math.abs(nx - x) + Math.abs(ny - y);

    if (t - nt < r || ((t - nt) - r) & 1) {
      out("No");
      return 0;
    }
    nt = t;
    nx = x;
    ny = y;
  }
  out("Yes");
  //init(), inI(), out()など事前に用意している。
}



////////////////////////////////////////////////////////////////////////////////////
var input, inputCnt;

// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug() {
  Main(document.getElementById("input").value);
}

function init(inputData) {
  //配列inputに順番に代入
  input = inputData.replace(/\n/g, " ");
  input = input.split(" ");
  inputCnt = 0;
}
//output
const out = (output) => { console.log(output) }
const outln = (output) => { console.log(output + "\n") }

//input
const inS = () => { return input[inputCnt++] };
const inI = () => { return parseInt(inS(), 10) };
const inF = () => { return parseFloat(inS()) };

//prototype
Array.prototype.rsort = function () {
  return this.sort(function (a, b) { return (a < b ? 1 : -1); });
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
