import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import UUID from "react-uuid";

const headArray = ["DATE", "TIME", "REMEMBER_TODO"];

// const rememberSampleData = {
//   r_id: "0001",
//   r_date: "2021-09-08",
//   r_time: "10:37:22",
//   r_remember: "나의 리멤버 리스트",
//   r_comp: false, // 완료 표식
// };

function RemList() {
  const rem_header = useCallback(() => {
    // 제목배열을 map()을 이용하여 forEach하기
    return headArray.map((text) => {
      // 제목배열의 요소인 문자열을 포함하는 th tag를 생성하여 return
      return <th key={UUID()}>{text}</th>;
    });
  }, []);

  /**
   * rememberList를 담을 배열을 "상태"로 선언하기
   */
  const [rememberList, setRemeberList] = useState([]);

  /**
   * useEffect가 실행(호출할) 함수를 선언
   * 이 함수는 화면이 rendering될 때 한 번만 호출될 함수
   * 하지만 react에 의해서 현재 화면이 보여지는 상태가 되면 이 함수를 계속해서 다시 생성
   * 현재의 컴퓨터 성능으로는 큰 문제가 없지만 이러한 과정이 계속해서 반복된다면 메모리 등에 문제를 일으킬 수 있다.
   *
   * react 16에서는 이러한 함수를 useCallback()으로 감싸도록 권장하고 있다.
   * useCallback()으로 감싸진 함수는 이전에 한 번이라도 만들어진 경우 그대로 재사용하고 없는 경우에만 함수를 생성한다.
   */
  const fetchCallback = useCallback(() => {
    // 가져오기
    const remString = localStorage.rememberList;
    if (remString) {
      console.log("Fetch Data");
      const remJSON = JSON.parse(remString);
      setRemeberList(remJSON);
    }
  }, []);

  // 상태가 없으면 최초에 rendering 시 한 번만 함수를 호출
  // 변화를 감시할 상태 데이터가 없으면
  // 	최초에 rendering(app 시작될 때, page가 열릴 때, 새로고침) 될 때 fetchData를 실행한다.
  useEffect(fetchCallback, [fetchCallback]);

  //   const effectFunc = () => {
  const saveStorage = () => {
    console.log("EFFECT");
    /**
     * rememberList 객체 배열에 담긴 데이터를 JSON string 문자열로 변환하여 JSON.stringify()
     * localStorage에 rememberList라는 이름으로 저장하라
     */
    // 저장하기
    if (rememberList.lengh > 0) {
      /**
       * 객체 배열 sort하기
       * 배열.sort(compareFunction(p, n))
       *
       * compareFunction의 return 값에 따라서 배열의 위치가 교환된다
       * return == 1 -> next가 앞으로 pre가 뒤로 이동
       * return == -1 -> pre가 앞으로
       * return == 0 -> 그대로 있어라
       *
       * map(), filter()는 결과를 return하여 다른 배열 생성
       * sort()는 자기 자신을 변경한다.
       */
      // rememberList에 들어있는 것들은 객체들임
      // 객체들은 sort 안 됨
      rememberList.sort((pre, next) => {
        // 완료 시 1 return 그러지 않았을 경우 -1 return
        // return pre.r_comp ? 1 : pre.r_date > next.r_date && pre.r_time > next.r_time ? 1 : -1;
        if (pre.r_comp && !next.r_comp) return -1;
        if (!pre.r_comp && !next.r_comp) return 1;
        if (next.r_date > pre.r_date && next.r_time > pre.r_time) return -1;
      });
      localStorage.rememberList = JSON.stringify(rememberList);
    }
  };

  // useEffect(함수, 상태 대상)
  // 화면에 rendering이 발생할 때 실행되는 public event 연결
  // 누가 일부로 호출하거나 실행하지 않아도 어떠한 조건이 발생하면 자동으로 호출되어 실행되는 함수
  //   useEffect(effectFunc, []);
  useEffect(saveStorage, [rememberList]);

  /**
   * list 중 한 요소 더블클릭 시
   * 선택된 요소의 UUID 값을 추출하여
   * 	1. 해당 요소의 값 삭제하기
   * 	2. 해당 요소의 r_comp 값을 완료된 것으로 표시하기
   */
  const trOnClick = (e) => {
    const td = e.target;
    if (td.tagName === "TD") {
      const uuid = td.closest("TR").dataset.uuid;
      //   alert(uuid);
      /**
       * 리스트에서 선택된 요소의 UUID 값이 담긴 것만 빼고(filtering)
       * 새로운 복제 _list를 만들기
       */
      //   const _list = rememberList.filter((remember) => {
      //     return remember.r_id !== uuid;
      //   });
      // filtering된 list를 rememberList로 대치하기

      const _list = rememberList.map((remember) => {
        if (remember.r_id === uuid) {
          return { ...remember, r_comp: !remember.r_comp };
        }
        return remember;
      });
      setRemeberList([..._list]);
    }
  };
  const list_body = rememberList.map((remember) => {
    return (
      <tr
        key={remember.r_id}
        data-uuid={remember.r_id}
        className={remember.r_comp ? "comp" : ""}
        onDoubleClick={trOnClick}
      >
        <td>{remember.r_date}</td>
        <td>{remember.r_time}</td>
        <td>{remember.r_remember}</td>
      </tr>
    );
  });

  /**
   * input box 입력을 하는 과정에서 Enter를 누르면...
   *
   * 데이터를 어딘가에 추가하기
   * 	어딘가? -> rememberList 상태에 추가
   */
  const onKeyDown = (e) => {
    // 키보드로 입력을 하는 도중 Enter키를 누르면
    if (e.keyCode === 13) {
      // 현재까지 입력된 문자열들을 추출한다
      // 문자열은 input box의 value 속성에 담겨 있다
      const { value } = e.target;
      //   alert(value);

      //input box에 입력된 문자열을 rememberList에 담기 위해서 객체로 생성
      const remember = {
        // moment()를 사용하여 현재 시스템의 날자와 시간 문자열로 가져오기
        r_id: UUID(),
        r_date: moment().format("YYYY[-]MM[-]DD"),
        r_time: moment().format("HH:mm:ss"),
        r_remember: value,
        r_comp: false,
      };

      /**
       * const ar = [1, 2, 3, 4, 5] 기존의 배열을
       * const arCopy = [...ar] 새로운 arCopy로 복제
       *
       * const arCopyAdd = [...ar, 9, 10] 기존배열을 복제하면서 요소 추가하기
       * const arCopyAdd ===> [1, 2, 3, 4, 5, 9, 10] 담기게 된다.
       */
      // 생성된 remember 객체 데이터를 rememberList 상태에 추가하기
      //   setRemeberList([rememberList.concat(remember)])
      setRemeberList([...rememberList, remember]);
      e.target.value = "";
    }
  };

  return (
    <table className="rem_list">
      <thead>
        <tr>{rem_header()}</tr>
      </thead>
      <tbody>
        {list_body}
        <tr>
          <td colSpan="2">기억 할 일</td>
          <td>
            <input onKeyDown={onKeyDown} name="r_remember" placeholder="기억 할 일" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RemList;
