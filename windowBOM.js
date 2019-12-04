// 브라우저 전체를 담당하는 게 Window 객체이고, 웹사이트만 담당하는게 Document 객체이고
// window 객체 아래를 보면, String, Boolean, Object, Number, Function, Array같은 자료형도 들어있음

/* close() */
window.close() // 현재 창 닫기


/* open() */
window.open() // 새창 열기
open('https://zerocho.herokuapp.com'); // 새 탭
open('https://zerocho.herokuapp.com', '_self'); // 현재 탭
open('https://zerocho.herokuapp.com', '', 'width=200, height=200'); // 가로, 세로 200px의 팝업창

// document.write로 새창의 내용을 변경 가능
var popup = window.open('', '', 'width=200,height=200');
popup.document.write('안녕하세요');

// opener 객체를 사용하면 원래 페이지에 접근 가능
popup.opener.document.write('hello');


/* window.encodeURI(), window.decodeURI() */
// 주소에 한글을 넣으면 유니코드로 변환됨
encodeURI('자바스크립트') // 유니코드로 변환
decodeURI('%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8') // 한글로 변환


/* window.setTimeout(함수, 밀리초), window.setInterval(함수, 밀리초) */
var timeSet1 = setTimeout(function(){
	console.log('1초 뒤에 한번만 실행됩니다')
}, 1000)
clearTimeout(timeSet1) // setTimeout을 종료함

var timeSet2 = setInterval(function(){
	console.log('1초마다 실행됩니다.')
}, 1000)
clearInterval(timeSet2) // setInterval을 종료함


/* window.getComputedStyle(태그) */
// 현재 적용된 css 스타일 확인 가능
console.log(getComputedStyle(document.getElementById('app-root')));


/* navigator */
// 브라우저나 운영체제에 대한 정보가 있음
// 브라우저를 체크할 때 쓰임
navigator.userAgent; // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"
navigator.language; // "ko"
navigator.cookieEnabled; // true
navigator.vendor; // "Google Inc"


/* screen */
// 화면에 대한 정보를 알려줌
// 너비(width), 높이(height), 픽셀(pixelDepth), 
// 컬러(colorDepth), 화면 방향(orientation), 
// 작업표시줄을 제외한 너비와 높이(availWidth, availHeight) 등이 있습니다. 
screen.availHeight; // 1080
screen.availWidth; // 1920
screen.colorDepth; // 24


/* location */
// 주소에 대한 정보를 알려줌
// (protocol, host, hostname, pathname, href, port, search, hash 속성을 이용). 
location.host; // "www.zerocho.com"
location.hostname; // "www.zerocho.com"
location.protocol; // "https:"
location.href; // "https://www.zerocho.com/category/Javascript/post/..."
location.pathname; // "/category/Javascript/post/..."
location.reload() // 사이트 새로고침
location.replace() // 현재 주소를 다른 주소로 교체 (페이지 이동되지만 이전 페이지 기록이 남지 않음)


/* history */
history.forward(), history.go(1) // 앞으로 가기
history.back(), history.go(-1) // 뒤로가기
history.go(페이지수) // 히스토리간에 이동
history.length // 뒤로가기할 수 있는 페이지의 개수를 의미합니다.

history.pushState(객체, 제목, 주소)
history.replaceState(객체, 제목, 주소)
// HTML5에서 추가됨, 페이지를 이동하지 않고 단순히 주소만 바꿔줌
// 객체 부분에 페이지에 대한 정보를 추가 가능 spa를 만들 때 자주 이용)