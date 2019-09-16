function vacation(){
	var x = process.argv[2]
	let y = Number(x)

	if(isNaN(y) === false){  // 숫자만 출력되게 NaN 체크
		y >= 5 ? console.log('휴가 합격입니다') : console.log('휴가 불합격입니다');  
	}else{
		console.log('숫자를 입력해주세요')
	}
}

vacation()