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
	let count = 0;
	
	// 공격 횟수가 총 10번
	for(let i = 0; i < 10; i++){
		// 공격이 한번 끝나면 초기화
		let strike = 0;
		let ball = 0;
		let inputNum = prompt('숫자를 입력해주세요 4자리 (0~9 중복없이 입력해주세요)\nex) 1234, 4356')		
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
		
		// 공격 횟수 체크
		if(10-count > 0){
			console.log('strike의 갯수는 ' + strike + '개 입니다')
			console.log('ball의 갯수는 ' + ball + '개 입니다')
			console.log('남은 공격 횟수는 ' + (10-count) + ' 개 입니다\n\n')
		}else{
			alert('GAME OVER\n정답은 '+ choiceNum.join('') + ' 입니다')
			break;
		}
		
		// 정답 체크
		if(strike === 4){
			alert(choiceNum.join('') + ' 정답 입니다!!!')
			break;
		}
	}
}

play.randomNum()
