/* 개행 */
console.log('안녕\n하세요')

/* length 문자열의 길이 */
var string = '안녕하세요'
console.log(string.length) // 5

/* charAt 자릿수 */
console.log(string.charAt(3)) // 세
console.log(string[3]) // 세

/* split 문자열을 배열로 변환 */
// split('내용에 따라 문자열을 나눠줌')
console.log(string.split('')) // ['안','녕','하','세','요']
var string2 = '사과,배,감'
console.log(string2.split(',')) // ['사과', '배', '감']

/* trim 공백 제거 */
var string3 = '       yoyo   '
console.log(string3.trim()) // yoyo 문자열의 모든 공백을 제거함

/* toUpperCase toLowerCase 대문자, 소문자 */
var string4 = 'aBcD'
console.log(string4.toUpperCase())  // ABCD
console.log(string4.toLowerCase())  // abcd

/* substr(시작점, 길이) */
var string5 = 'abcdefg'
console.log(string5.substr(1,3))  // bcd

/* slice(시작점, 끝점) */
// subString과 기능적으로 똑같지만 -값이 가능한 점에서 다름
console.log(string5.slice(1,3)) // bc
console.log(string5.slice(-4,4)) // d

/* replace('찾을 문자열', '바꿀 문자열') 문자열 내용 변경 */
var string6 = 'hello world'
console.log(string6.replace('hello', 'goodbye'))  // goodbye world

/* indexOf(찾을 값), lastIndexOf(찾을 값) */
console.log(string6.indexOf('o')) // 4
console.log(string6.lastIndexOf('o')) // 7 , 빈칸도 index로 포함하기 때문에 7
