1. this 키워드

- 일반(전역)함수 or 그냥 쓰면 window객체 출력
- 객체 내 함수(메서드)에서 쓰면 해당 객체
- 객체 내 Arrow Function 내에서 쓰면 window객체
- constructor 내에서 사용하면 instance
- event listener 내에서 사용하면 e.currentTarget

case1: event listener 내에서 콜백함수를 썼을 때의 this
case2: object 내에서 콜백함수를 썼을 때의 this
case3: object 내에서 콜백함수를 arrow function으로 썼을 때의 this

arrow function 특징: 내부의 this값을 변화시키지 않고 외부 this값을 그대로 재사용 가능

2. Arrow Function

- 코드들을 기능으로 묶고 싶을 때 사용
- 입출력 기계를 만들고 싶을 때 사용
- 장점1: 입출력 기계를 만들 때 보기 쉬움
- 장점2: 파라미터 1개면 소괄호 생략 가능
- 장점3: 코드가 한줄이면 중괄호도 생략가능
