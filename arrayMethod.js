/* slice */
// slice(start index, end index(생략하면 배열 끝까지))
var array = [1,2,3,4,5];
array.slice(1) // 2,3,4,5
array.slice(1,4) // 2,3,4  1이상 4미만 배열 출력됨
array.slice(-3, -1) // 3,4 음수면 끝에서 부터


/* splice */
// splice(index, index부터 삭제 할 수(추가 할꺼면 0), 추가할 원소 ...)
array.splice(2, 1) // [1, 2, 4, 5] slice랑 다르게 기존 배열에 영향을 줌
console.log(array); // [1, 2, 4, 5] index[2]에서 부터 1개가 삭제됨
console.log(array.splice(2, 1)[0]); // 배열로 반환되긴 때문에 [0]의 값을 꺼내줘야함

array.splice(3, 0, 99, 99, 99); // index[3]부터 99,99,99 인자가 배열에 추가됨 
console.log(array); // [1, 2, 4, 99, 99, 99, 5]


/* concat */
/* 배열이나 값들을 기존 배열에 합쳐서 새 배열을 return
(배열 안의 배열) 를 합칠 때는 1 depth 만 적용이 됩니다. */
var item = [1,2,3]
var reItem = item.concat(4,5,6,[7,[8,9]])
console.log(reItem) // [1,2,3,4,5,6,7,[8,9]] 1depth만

var people = [{name: 'Sally'}, {name: 'Shane'}];
var people2 = [{name: 'Simon'}, {name: 'Ben'}];

//concat 활용
var people = [{name: 'Sally'}, {name: 'Shane'}];
var people2 = [{name: 'Simon'}, {name: 'Ben'}];

people.concat(people2).forEach(function(person) {
  console.log(person.name); // Sally Shane Simon Ben
});


/* indexof */
/* ex) indexof('인자', index(생략가능))
배열에서 지정된 요소를 찾아 인덱스를 반환하고 존재하지 않으면 -1을 반환(return 값을 검사해서 Boolean 형태로 활용 가능)
두 번째 인자로는 검색을 시작할 인덱스를 넣어줄 수 있음(Default 값은 0: 전체 검색). 만약 값이 음수이면, 배열의 끝부터 offset 값으로 적용됨*/
var family = ['Shane', 'Sally', 'Isaac'];
family.indexOf('Isaac') // 2
family.indexOf('Kittie') // -1

var kittieExists = family.indexOf('Kittie') > -1; // false
if(!kittieExists){
  family.push('Kittie');
}
console.log(family); // ['Shane', 'Sally', 'Isaac', 'Kittie'];
console.log(family.indexOf('Sally', 2)); // -1 , 2이상 index부터 검색
console.log(family.indexOf('Sally', 1)); // 1

/* ex) 특정 문자 모두 찾기 */
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';

var idx = array.indexOf(element);
while(idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1); // 'a'값을 찾은 다음 index부터 검색
}
console.log(indices)


/* sort */
// sort(function(이전 값, 다음 값) { 조건 })
// 배열의 요소를 적절한 위치에 정렬하고 배열을 반환
// 아스키 코드로 정렬 하기 때문에 1, 2, 10 이 있으면 1, 10, 2 순으로 정렬하기 때문에 비교함수를 써야함
var items = [10, 30, 2, 20];

// 오름차순
items.sort((a, b) => a - b);
console.log(items); // [2, 10, 20, 30]

// 내림차순
items.sort((a, b) => b - a);
console.log(items); // [30, 20, 10, 2]

// 이름의 길이순으로 정렬하기
var names = ['Kittie', 'John', 'Sally', 'Einstein'];
names.sort((a, b) => b.length - a.length);

// ex) 위에 문법을 풀어 쓴것
names.sort(function(a, b){
  return b.length - a.length
})
console.log(names); // ['Einstein', 'Kittie', 'Sally', 'John']


/* map(function(값, index) { 조건 }), 
forEach(function(값, index) { 조건 }) */
//map은 바뀐 새배열을 반환함
var array = [1,2,3];
array.map(function(x){
  return x+1;
}); // [2,3,4]

// map + arrow 활용
array.map(x => x+1) // [2,3,4] ,위랑 같음

array.forEach(function(x, i) {
  alert(x + ':' + i);
}); // 1:0, 2:1, 3:2


/* reduce(function(이전값, 현재) { 조건 }) */
// .reduceRight - 오른쪽 부터 계산
var array = [1, 2, 3, 4, 5];
array.reduce(function(prev, cur) {
  return prev + cur;
}); // 15

// reduce + arrow 활용
array.reduce((prev, cur) => prev+cur) // 15


/* filter(function(항목) { 조건 }) */
// 특정 조건에 해당하는 배열만을 filter해서 새 배열 생성
// filter(item,index, array -> 배열은 호출한 변수가 array가 됨)
var array = [1,2,3,4,5];
array.filter(function(x) {
  return x % 2 === 0;
}); // [2,4]

//filter + arrow 활용
array.filter(x => x % 2 === 0) // [2,4]


/* every(function(항목) { 조건 }),
.some(function(항목) { 조건 }) */
// every는 모든 항목이 조건을 만족하면 true,
// some은 하나라도 만족하면 true
var array = [1, 3, 5, 7, 9];
array.every(function(i) {
  return i % 2 === 1;
}); // true
array.every(function(i) {
  return i < 9;
}); // false
array.some(function(i) {
  return i === 9;
}); // true


/* Array.isArray() 배열인지 체크 */
Array.isArray([1,2,3]) // true


/* 나머지 배열 메소드들 */
array.shift();  // 첫 번째 요소를 제거하고, 제거된 요소를 반환
array.unshift();  // 첫번째 원소 추가하고 length를 반환
array.pop();  // 마지막 요소를 제거하고, 제거된 요소를 반환
array.push(); // 마지막 요소를 추가하고 length를 반환
array.reverse(); // 배열을 뒤집음
array.join('연결 되는걸 적을 수 있음');  // 배열의 모든 원소를 문자열로 변환하고 연결(+)한 결과 반환 (기본값 ,)

// 배열을 합치고 싶을때는 apply를 활용 해야함
// 그냥 vegetables.push(moreVegs) 할 경우 ['당근', '감자', ['셀러리', '홍당무']] 로 들어감
var vegetables = ['당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

// vegetables.push('샐러리', '홍당무'); 동일한 문법
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['당근', '감자', '셀러리', '홍당무']