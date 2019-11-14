function Product(name, price) {
	this.name = name;
	this.price = price;
	
	if (price < 0)
	throw RangeError('Cannot create product "' + name + '" with a negative price');
	return this;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log(cheese)
console.log(fun)

/* 
call 문법 설명

- Syntax
fun.call(thisArg[, arg1[, arg2[, ...]]])

- Parameters
fun : 가져다쓸 메소드
thisArg : 현재 객체로 사용될 객체
arg1,arg2,arg3 : 메소드에 전달할 인자목록 

ex) 
Product.call(this, name, price);

*/