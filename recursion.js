fs = require('fs')
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split(' ').map(Number)
// 3 2 같이 입력
var m = input[0]
var n = input[1]
var check = [];
var output = [];


function go(index, m, n) {
    // 끝나는 분기점이 있어야 무한 루프를 돌지 않음
    if (index == n) {
		console.log(output.join(" ")); 
        return
    }

    for (var i = 1; i <= m; i++) {
        // check에 true값이 있으면 해당 실행문을 넘김
        if (check[i] === true) {
			continue;
		}
        check[i] = true;
        output[index] = i;
        // 재귀 함수 실행
		go(index + 1, m, n); 
		check[i] = false;
	}
}

go(0, m, n);
