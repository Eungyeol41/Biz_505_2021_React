import React, { useContext, useRef } from "react";
// import BookContext from "../context/BookContext";
import "../css/BookInsert.css";
import BookView from "./BookView";
import MyButton from "../My/MyButton";
import { useBookContext } from "../context/AppContextProvider";
import UUID from "react-uuid";

function BookInsert() {
  const { book, setBook, bookList, setBookList } = useBookContext();

  // Rendering될 때마다 초기화가 된다...?
  /**
   * react에서 일반적으로 선언된 변수는 --> let nextId = 0;
   *  실제 화면 전체가 변경되지 않더라도 --> 화면 전체가 변경 : Refresh(F5)
   * 		--> React는 화면을 Refresh하지 않고 Rendering한다.
   * 		-->	데이터가 변경되었을 때만 ReRendering된다.
   * 	변수는 무조건 초기화되어 버린다
   *
   * 초기화되는 것을 방지하면서 현재 화면에서 어떤 변수(public 변수)의 값을 유지하고 싶을 때가 있다.
   *
   * 그래서 reference 변수로 선언을 해주어야 한다.
   *
   * 1. 화면이 Refresh 되지 않는 상태에서 어떤 변수를 보관하고 싶을 때
   * 		const 변수명 = useRef(초기값)
   * 2. (주로) inputbox와 같은 특정 tag 요소를 일반적인 HTML의 JS처럼 핸들링하고 싶을 때
   * 		Ref 변수를 선언하고 컴포넌트 요소의 Ref 속에 해당 변수를 설정해둔다.
   *
   * 		이 때는 매개변수가 없거나 null로 설정해야 한다
   *
   * 		const 변수명 = useRef()
   * 		const 변수명 = useRef(null)
   *
   * 		사용할 때는 `<input ref={변수명} />` 처럼 지정해둔다
   *
   * 		코드에서 핸들링할 때는 `변수명.current.어떤 함수()` 처럼 핸들링한다
   *
   * 		단, tag 요소를 핸들링하는 코드는 가급적 사용하지마라
   * 			useRef()로 핸들링 해야하는 것들 중 대부분 state를 핸들링함으로써 구현이 가능한 경우가 많다.
   */
  const nextId = useRef(0);
  const nameId = useRef();
  const genreId = useRef();
  /**
   * nextId라는 변수를 만들고 입력창에 값이 입력되면 nextId를 id에 저장하기
   */
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };

  /**
   * 입력된 도서정보를 배열에 추가하기
   * 입력된 도서정보에 UUID 키값을 추가하고 도서정보를 배열에 저장하는 데
   * 타이밍에 따라 아직 UUID가 미처 추가되지 않은 상태에서
   * 리스트에 추가되는 것을 방지하기 위하여 Promise 방식으로 함수를 실행한다.
   *
   * 바깥쪽 함수에 async 키워드 추가
   * 내부에서 순서를 지켜야 할 함수들에 await 추가
   */
  const bookInsert = async () => {
    if (book.b_name === "") {
      alert("도서명을 입력하세요");
      nameId.current.focus();
      return;
    }
    if (book.b_genre === "") {
      alert("장르를 입력하세요");
      genreId.current.focus();
      return;
    }
    // await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);

    /**
     * Ref로 선언된 변수의 current 요소를 1 증가시켜 다음 번 list의 id로 사용
     *
     *  nextId++; -> 와 같은 코드 불가능
     */
    nextId.current++;
    /**
     * 리스트에 추가한 후 book state를 초기화하여 입력창에 입력된 내용 삭제
     *
     * 이 기능을 사용하려면 반드시 input box value를 사용해야 한다
     * <input value={state} />
     * <input defaultValue={state} />를 사용하면 기능이 효과가 없음.
     */
    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };

  return (
    <>
      <div className="input_box">
        <label>도서명</label>
        <input ref={nameId} name="b_name" value={book.b_name} onChange={onChangeHandler} />
        <label>장르</label>
        <input ref={genreId} name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
        {/* <button>리스트 추가</button> */}
        <MyButton onClick={bookInsert}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInsert;
