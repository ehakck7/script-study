// setTimeout때문에 비동기로 실행됨(0이여도 비동기로 실행됨)
// first와 num이 실행되는걸로 알 수 있음
var cbExample = function (number, cb) {
	setTimeout(function () {
		var sum = 0;
		for (var i = number; i > 0; i--) {
			sum += i;
		}
		cb(sum);
	}, 2200);
};
cbExample(10, function (result) {
	console.log(result);
}); // 55

var cbExample2 = function (number, cb) {
	setTimeout(function () {
		var sum = 0;
		for (var i = number; i > 0; i--) {
			sum += i;
		}
		cb(sum);
	}, 2100);
};
cbExample2(5, function (result) {
	console.log(result);
}); // 15

console.log('first');
console.log('num');