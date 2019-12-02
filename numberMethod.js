/* tofixed(소수자릿수) */
// 문자열로 반환되기 때문에 따로 숫자로 변경해줘야함
var num = 1.2346
console.log(num.toFixed(3))  // 1.235  ,소수점 길이만큼만 반올림하여서 반환해줌

/* toPrecision(자릿수) */
// 지정된 자릿수 까지만 표현
0.00125.toPrecision(2); // '0.0013' , 소수일 경우 앞에 0을 무시하고 남은 자릿수 125에서 반올림하여 13이 됨
1.2346.toPrecision(2); // '1.2' ,2자리 이기 때문

/* isNan 숫자인지 아닌지 체크 */
// NaN은 서로 같지 않음
isNaN(3 / '가') // true
Number.isNaN(3 / '가') // true , isNaN은 문제가 있어 Number를 붙여서 쓰자

/* Infinity 무한값*/
console.log(3/0) // Infinity
console.log(-3/0) // -Infinity

/* parseInt('num', 진법), parseFloat(숫자) */
// Int-정수, Float-실수로 만들어줌
console.log(parseInt("1등", 10)) // 1 , 문자가 있어도 제외하고 숫자로 변환해줌(10진법) - 숫자로 시작해야함
console.log(parseFloat("0.5달러")) // 0.5 
console.log(parseFloat(0.3.toFixed(2))) // 0.3

/* Number - 숫자로 변환*/
console.log('10') // 10
console.log('10입니다') // NaN , 문자가 있으면 처리하지 못함


