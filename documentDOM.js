// document는 window의 속성이지만 window가 전역객체라 생략가능
// html에 관한 것들을 담당하는 객체라서 대부분 태그를 선택하고 조작하는 데 사용함

/* 태그 선택자 */
// 여러개 선택되기 때문에 항상 배열 (메소드 이름도 Elements입니다)
document.getElementById('id값') // id 값을 선택 <div id="test">...</div>
document.getElementsByClassName('class이름') // class 값을 선택
document.getElementsByName('name이름') // name 값을 선택
document.getElementsByTagName('태그 이름') // 태그 명을 선택

// css 선택자로 선택할 수 있게 해줌
// id는 #, class는 . 입니다. 태그명[속성명=속성값] 같은 것도 할 수 있고, 부모 > 자식, 부모 자손등 선택자가 가능
document.querySelector('선택자')
document.querySelectorAll('선택자')

// document에 새로운 태그를 생성 할 때 사용
// 바로 생성되는 게 아니라 변수를 통해 메모리에 저장
var div = document.createElement('div')

// text를 생성할 때 사용, 변수를 통해 메모리에 저장
// Node는 태그와 텍스트를 가리키는 명칭
var text = document.createTextNode('텍스트 테스트')

// 가짜 document를 만들어서 넣어줌
// fragment(조각)을 만들어 한번 만 조작 해주면 성능에 부담이 덜 가기 때문
// 직접적으로 body에 영향을 주는 것은 fragment를 추가할 때, 단 한 번 (밑에 예시 참고)
var div = document.createElement('div')
var text1 = document.createTextNode('텍스트 입니다')
var fragment = document.createDocumentFragment()
div.appendChild(text1) // div에 text를 넣음
fragment.appendChild(div) // text가 들어가 div를 fragment에 담음
document.body.appendChild(fragment) // body에 fragment를 추가

// document.head, document.body
// 각각 html의 head와 body에 접근할 수 있게 해줍
document.head
document.body

// document.anchors, document.links, document.forms, document.images, document.scripts
// 앵커, 링크, 폼, 이미지, 스크립트에 접근할 수 있게 해줌
document.anchors
document.links
document.forms
document.images
document.scripts

// document.title
// title을 변경 가능함
document.title = '바뀌지롱'


/* DOM */
// document를 객체로 구현
// 기본 html 구조를 객체로 표현하면 밑에 처럼 됨 - DOM 트리구조로 표현
{
	document: {
		html: {
			head: {
				title: ...
			},
			body: {
				header: ...
			}
		}
	}
}

/* Node와 Element */
// Node는 태그 노드와 텍스트 노드 전체를 가리킴
// Element는 텍스트 노드를 제외하고, 흔히 생각하는 태그(<a>같은)만 가리킴, 태그를 찾고 싶으면 element를 찾으면 됨

/* node Type */
1(Node.ELEMENT_NODE) -> Element 
3(Node.TEXT_NODE) -> 텍스트 
8(Node.COMMENT_NODE) -> 주석 
9(Node.DOCUMENT_NODE) -> Document
10(Node.DOCUMENT_TYPE_NODE) -> DOCTYPE 
11(Node.DOCUMENT_FRAGMENT_NODE) -> Document Fragment
// ex) document.nodeType  ---->   9

/* 태그.children, 태그.childNodes */
// children(텍스트 노드 제외)또는 childNodes(텍스트 노드 포함)
// DOM의 속성들은 모든 태그에 다 사용할 수 있습니다.
document.body.children
document.body.childNodes  

/* 태그.firstChild, 태그.firstElementChild
태그.lastChild, 태그.lastElementChild */
document.body.firstChild  // 맨 처음 자식
document.body.firstElementChild // 맨 처음 자식(텍스트 노드 무시)
document.body.lastChild // 마지막 자식
document.body.lastElementChild // 마지막 자식(텍스트 노드 무시)

/* 태그.parentNode, 태그.parentElement */
// child와 다르게 부모는 항상 한 명이기 때문에 단수형 parentNode입니다.
document.body.parentNode
document.body.parentElement

/* 태그.previousSibling, 태그.nextSibling, 
태그.previousElementSibling, 태그.nextElementSibling */
document.body.previousSibling // 이전 형제
document.body.previousElementSibling // 이전 형제(텍스트 노드 무시)
document.body.nextSibling // 다음 형제
document.body.nextElementSibling // 다음 형제(텍스트 노드 무시)

/* 태그.innerHTML, 태그.outerHTML */
// 선택한 태그의 내용물을 가져오거나 바꿀 수 있음
var footer = document.getElementsByTagName('footer')[0];
footer.innerHTML; // 'hello'
footer.innerHTML = 'goodbye';  // 내용이 goodbye로 변경됨

footer.innerHTML = '<b>bold</b>'; // 텍스트 외의 태그를 넣는 것도 가능
footer.outerHTML = '<footer><b>bold</b></footer>'; // outer는 불러오는 본인(현재태그)도 포함되서 반환함

/* 태그.속성 */
// 태그를 선택하고 그 속성을 조회할 수 있음. 바꾸는 것도 가능
var tag = document.getElementById('header');
tag.id; // 'header'
id, className(class), name, value, placeholder, checked, disabled, readonly // 속성 값을 확인 할 수 있음

tag.attributes // 해당 태그가 가진 모든 속성을 볼 수 있음

/* 태그.clientHeight, 태그.clientWidth */
태그의 margin, border, scrollbar을 제외한 높이와 너비를 반환

/* 태그.offsetHeight, 태그.offsetWidth */
태그의 margin만 제외한 높이와 너비를 반환

/* 태그.scrollHeight, 태그.scrollWidth */
스크롤 가능한 범위까지 포함한 태그의 높이와 너비를 반환


/* 메소드 */
/* 태그.appendChild */
// createElement() 함수로 만들었던 태그를 넣을 때 이 메소드가 필요
// 마지막 순서의 자식 태그로 추가
var add = document.createElement('div')
document.body.appendChild(add) // body 마지막 자식으로 div태그를 추가

/* 태그.removeChild */
// 선택한 자식 태그를 삭제함
document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]); // body의 마지막 태그를 삭제하는 코드

/* 태그.insertBefore */
// insertBefore 메소드는 자신의 형제 태그로 집어넣음
// 부모.insertBefore(넣을 태그, 기준 태그)
var textTag = document.createElement('div')
document.body.insertBefore(textTag, document.getElementById('header')) // body 아래에 header를 기준으로 형제에 textTag를 넣음

// ex) 부모의 바로 아래 있는 children이 기준이다!
var box = document.getElementsByClassName('box')[0]
var boxlist = document.getElementById('box-list')
var newtag = document.createElement('p')
box.insertBefore(newtag, boxlist)

/* 태그.cloneNode */
// 자기 자신을 복사하여 저장함
// clone으로 복사한 태그는 기존 태그가 변경되도 변경되지 않음
var clone = document.getElementsByTagName('nav')[0].cloneNode();