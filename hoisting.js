function abc() {
	var a = 'bbb';
	console.log(a) //  ---- 1
	function c() {
		console.log(a); // --- 2
		(function () {
			console.log(a); // --- 3
			a = 'ccc';
		})();
		var a;  
		console.log(a) // ---4
	}

	function d() {
		console.log(a); // --- 5
	}
	c();
	a = 'ddd';
	d();
};
abc();

// 호이스팅 되서 var a가 위로 올라가서 undefined가 됨
/* function c() {
	var a;  
	console.log(a); // --- 2
	(function () {
		console.log(a); // --- 3
		a = 'ccc';
	})();
	
	console.log(a) // ---4
} */