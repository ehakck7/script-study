// 즐거운 야구 게임
const play = new baseBall
function baseBall(){}

// 랜덤 숫자 생성
baseBall.prototype.randomNum = function(){
	const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	let choiceNum = []
	
	for (let i = 0; i < 4; i++) {
		let randomNum = Math.floor(Math.random() * numList.length)
		choiceNum[i] = numList.splice(randomNum, 1)[0]
	}
	play.playGame(choiceNum)
}

// play함수
baseBall.prototype.playGame = function(choiceNum){
	const checkNum = /^[0-9]+$/;
	let count = 0;
	
	// 공격 횟수가 총 10번
	while(count < 10){
		let strike = 0;
		let ball = 0;
		let inputNum = prompt('4자리 숫자를 입력해주세요 (0~9 중복없이 입력해주세요)\nex) 1234, 4356, 9501')
	
		// 중복값 체크
		let overlap = []
		for(let i = 0; i < inputNum.length; i++){
			let value = inputNum[i]
			if(overlap.indexOf(value) !== -1){
				var breakPoint = 1
				alert('중복 없이 입력하세요')
				break;
			}
			overlap[i] = value
		}
		if(breakPoint === 1){
			breakPoint = 0
			continue
		}

		// 입력값 검사
		if(!checkNum.test(inputNum) && inputNum !== null){
			alert('숫자만 입력해주세요!')
			continue
		}else if(inputNum.length > 4){
			alert('4자리 이하로 입력해주세요')
			continue
		}else if(inputNum.length < 4){
			alert('4자리가 아니에요 ㅠㅠ')
			continue
		}else if(inputNum === null){
			alert('게임을 종료합니다')
			break;
		}

		let inputList = inputNum.split('').map(Number)
		count++

		// 입력값과 숫자 비교
		for(let j = 0; j < 4; j++){
			for(let k = 0; k < 4; k++){
				if(choiceNum[j] === inputList[k]){
					if(j === k){
						strike += 1
					}else{
						ball += 1
					}
				}
			}
		}

		// 정답 체크
		if(strike === 4){
			alert(choiceNum.join('') + ' 정답 입니다!!!\n'+ count + ' 번 만에 맞췄습니다')
			break;
		}
		
		// 공격 횟수 체크
		if(count < 10){
			console.log('strike : ' + strike)
			console.log('ball : ' + ball)
			console.log('남은 공격 횟수 : ' + (10-count))
			console.log('입력값 : ' + inputList.join('') +'\n\n')
		}else{
			alert('GAME OVER\n정답은 '+ choiceNum.join('') + ' 입니다')
			break;
		}
	}
}

play.randomNum()
