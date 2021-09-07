import logo from "./logo.svg";
import "./App.css";

// 모듈로 분리된 컴포넌트 import하기
// ./components/hello.js 파일을 Hello라는 컴포넌트 객체로 선언하기

// 통상
// 사용자 정의형(개발자가 임의로 만든) 컴포넌트를 사용하기 위해
// import할 때는 이름의 첫 글자를 대문자로 사용
// react를 사용하는 과정에서 react 자체적으로 제공하는 컴포넌트와 혼동되거나 충돌하는 것을 방지하기 위함
import Hello from "./components/hello.js";

/**
 * HTML의 h1 tag를 사용하여 '반갑습니다' 문자열을 표현하는 컴포넌트 선언하기
 * 컴포넌트 : html tag를 만드는 코드 return
 *
 * 컴포넌트는 반드시 return문( tag를 그리는 코드, HTML 작성과 유사 )이 있다.
 *
 * 컴포넌트에 포함된 tag는 반드시 open과 close가 있어야 한다.
 * 보통 <p>text 방식으로 HTML에서는 사용하지만 컴포넌트에서는 <p>text</p>처럼 마감을 반드시 지켜야 한다.
 *
 * return문에서 사용되는 tag는 1개만 가능하다
 * return문에 여러 개의 tag를 나열할 수 없다
 * 여러개의 tag를 나열하려면 가장 바깥쪽에서 tag를 또 감싸줘야 한다.
 *
 * 가장 바깥쪽은 내용이 없는 tag로 감쌀 수 있다.
 * return ( <>  </> )와 같이 사용 가능
 *
 * @returns
 * MyBox라는 컴포넌트 선언한 것.
 */
const MyBox = () => {
  return (
    <>
      <div>
        <h1>반갑습니다</h1>
        <p>우리나라만세</p>
      </div>
      <div>
        <h1>대한민국만세</h1>
      </div>
    </>
  );
};

/**
 * 선언된 컴포넌트를 사용할 때는 마치 tag를 사용하는 것처럼 사용
 *
 * <컴포넌트 />
 * 사용 시에는 self closing 가능
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyBox />
        <Hello />
        <MyBox />
      </header>
    </div>
  );
}

export default App;
