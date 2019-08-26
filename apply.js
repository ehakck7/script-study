//call, apply 기본
var test = function(a,b,c){
	console.log(a+b+c)
}
test(1,2,3)
test.call(null, 1, 2, 3);
test.apply(null, [1, 2, 3]);

//call 기존 컨텍스트를 변경
var string = {
	string: 'hi',
	frm: function(){
		console.log(this.string);
	}
};
var string2 = {
	string: 'hiiiiiiii'
};

string.frm();
string.frm.apply(string2);

// apply
// 배열로 전달 받기 때문에 최소값, 최대값을 구할 수 있음
const num = [1,2,3,4,5]
console.log(Math.min.apply(null, num))
console.log(Math.max.apply(null, num))

// arguments 유사배열
// 배열은 아니지만 배열의 모습을 가지기 때문에.. 배열의 메소드를 쓸순 없음 (length는 있음)
function arg(){
	console.log(arguments)
	console.log(arguments[1]) // 배열로 받아옴
} 

arg(1, 'string', false)