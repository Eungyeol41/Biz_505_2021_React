let str = "";
console.log(str);
if (str) {
  console.log(str);
} else {
  console.log("없음");
} // 없음

let num = 0;
console.log(num); // 0
if (num) {
  console.log(num);
} else {
  console.log("숫자 없음");
} // 숫자 없음

/**
 * JS에서는
 * null, "", 0, undefined, NaN 등등의 값들이
 * if()를 만나면 false가 된다.
 */

// || (OR 연산자)
// 앞 뒤 중 하나만 true이면 결과값이 true임
// 앞이 true일 경우 뒤의 코드는 보지 않는다.
// 반대로 앞이 false일 경우 뒤의 코드도 확인
let b_yes = true || true;
console.log(b_yes); // true

b_yes = true || false;
console.log(b_yes); // true

b_yes = false || false;
console.log(b_yes); // false

/**
 * if (str) {
 *   result = "대한민국";
 * }
 */
// 문자열 str에 담긴 값이 "" 또는 null이면 뒤의 "대한민국" 문자열을 result에 담아라
// 만약 str에 문자열이 담겨있으면 그 값을 result에 담아라
let result = str || "대한민국";
console.log(result); // 대한민국
