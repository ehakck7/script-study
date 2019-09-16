function vacation(){
	let x = prompt("휴가를 입력해주세요", "");  // 입력값을 string으로 받음
	let y = Number(x)

	if(isNaN(y) === false){  // 숫자만 출력되게 NaN 체크
		y >= 5 ? alert('휴가 합격입니다') : alert('휴가 불합격입니다.');  
	}else{
		alert('숫자를 입력해주세요')
	}
}

vacation()