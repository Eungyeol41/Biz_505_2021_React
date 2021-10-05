# nodejs + express + mongoDB를 사용하여 인증 Server 만들기

- passport module을 사용하여 oAuth2.0 방식으로 인증서버 구현하기
- openAPI 방식으로 인증을 수행하는 표준 모델
- Kakao, Google, Facebook, Twiter 등에서 로그인을 공통으로 사용하는 표준 방식

## 인증 구조

- 로그인 시도 : 정상적인 사용자인지 검사하는 과정 (id, password 필요)
- 정상적인 사용자 : passport 발행, accessToken 발행

## dependency

- npm install mongoose
- npm install passport
- npm install express-session
- npm install cors

- npm install passport-local
- npm install passport-kakao
- npm install passport-google
- npm install passport-facebook
