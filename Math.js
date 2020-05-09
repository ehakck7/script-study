/* Math.random() */
// 0이상 1미만의 수를 랜덤으로 생성함
console.log(Math.random()) // ex) 0.2497641329476541
console.log(Math.floor(Math.random()*10)) // 0~9를 랜덤으로 생성함

/* Math.floor, Math.ceil, Math.round() */
// 내림, 올림, 반올림
Math.floor(5.5); // 5
Math.ceil(5.5); // 6
Math.round(5.5); // 6
Math.round(5.49); // 5
5.49.toFixed(1) // 5.5 , 소수점 반올림은 toFixed를 써야함

/* Math.abs() - 절대값 */
Math.abs(-10) // 10

/* Math.pow(값, 지수), Math.sqrt() */
// 거듭제곱, 제곱근
Math.pow(2, 3) // 8
Math.sqrt(25) // 5

/* Math.max(num, num1, num2), Math.min() */
// 최댓값, 최솟값
Math.max(1,2,3,4,5) // 5
Math.min(1,2,3,4,5) // 1

// apply 활용
var num = [1,2,3,4,5]
console.log(Math.max.apply(this, num)) // apply을 활용해서 배열에서도 사용 가능
