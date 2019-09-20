const kim = new a

function a(n1,n2){
	console.log(n1+n2)
}
a.prototype.txt = '문자입니다.'
a.prototype.num = function(num1, num2){    // prototype에 메소드를 만들어서 해봤는데 잘 작동함
	console.log(num1+num2)
}

a(1,3)
kim.num(1,2)
console.log(kim.txt)
