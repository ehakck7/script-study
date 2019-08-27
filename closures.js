function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    function makeFullName() {
        console.log(nameIntro + firstName + " " + lastName)
    }
    return makeFullName();
}
showName("Michael", "Jackson"); // 값을 각각 받아줌
showName("ㅁㄴㅇ", "123");