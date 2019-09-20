// 함수 person을 만들면 prototype 속성이 생성됨
function person(){} 
person.prototype.name = 'dong' // prototype 속성은 person.prototype.object에 접근할 수 있음, name이라는 속성을 추가

// dong변수는 __proto__ 속성에 의해 (조상의 prototype.object에 연결) person함수와 연결됨
let dong = new person(); // dong이라는 변수가 person함수에 의해 만들어짐 

// person에 있는 name 속성을 물려받아서 출력이 됨
console.log(dong.name); // dong
