var ex = {
	"name" : "dong",
	"address" : "seoul",
	"number" : "01086446757"
}

var st = JSON.stringify(ex) // JSON파일을 문자열로 받아옴 , 데이터를 서버에 전송할때 객체를 이해 못하는 서버가 있기 때문에
var parse = JSON.parse(st) // 문자열로 받은 데이터를 자시 JSON객체로 변환

console.log(st)
console.log(parse)
console.log(parse.name) // name값을 바꿔도 기존 JSON값은 바뀌지 않음 (객체가 깊은복사가 됨)


// JSON을 활용한 깊은 복사
var testCopy1 = {
	name : '깊은 복사 실패'
}
var testCopy2 = JSON.parse(JSON.stringify(testCopy1)) // JSON으로 깊은 복사
testCopy2.name = '깊은 복사 성공'

console.log(testCopy1.name)
console.log(testCopy2.name)


