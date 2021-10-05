import passport from "passport";
import passportLocal from "passport-local";

const LocalStorage = passportLocal.Strategy;

const exportPassport = () => {
  // 로그인이 성공했을 때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("Login Success");
    done(null, user);
  });

  // 로그인이 정상적으로 수행한 후 client에서 세션이 유효한 지 문의가 들어왔을 때 실행되는 함수
  passport.deserializeUser((user, done) => {
    console.log("DES", user);
    done(null, user);
  });

  // Login을 실제로 수행하는 함수
  passport.use(
    new LocalStorage(
      {
        usernameField: "userId",
        passwordField: "password",
        session: true, // SESSION 저장하기
      },
      (userId, password, done) => {
        /**
         * Login이 성공했을 경우
         * done() 함수의 2번째 매개변수에 login 정보를 담아주면
         * router에서 req.user 객체가 생성되고
         * login한 정보를 추출할 수 있다.
         */
        return done(null, { userId: "root", password: "12345" });
      }
    )
  );
};

export default exportPassport;
