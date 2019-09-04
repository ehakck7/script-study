// 각각의 메모리를 잡아먹게 됨, 200개면 200개만큼
function Person() {
	this.eyes = 2;
	this.nose = 1;
}

var kim  = new Person();
var park = new Person();

console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1

console.log(park.eyes); // => 2
console.log(park.nose); // => 1

// prototype으로 반복적인 작업을 줄임
function Person2() {}
Person2.prototype.eyes = 2;
Person2.prototype.nose = 1;

var kim  = new Person2();
var park = new Person2();


console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1

console.log(park.eyes); // => 2
console.log(park.nose); // => 1
