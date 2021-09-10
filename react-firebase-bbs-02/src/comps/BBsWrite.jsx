import React, { useEffect, useState } from "react";
import { fireStore } from "../config/BBSConfig.js";
import moment from "moment";
import { useHistory, useRouteMatch } from "react-router-dom";

// props.history
/**
 * react-router-dom을 사용하여 Routing을 구현하면 메뉴에서 글쓰기를 클릭했을 때
 * 호출(Rendering) 된 컴포넌트이다
 *
 * 이 때 react-router-dom은 매개변수로 history라는 변수를 전달한다
 * history 변수는 routing과 관련된 변수이다
 * history.push(URL) : URL로 redirect!
 *
 * react-router-dom 최신 버전에서는
 * 	매개변수를 지정하지 않고 use 함수를 사용하여 history를 사용할 수 있다.
 *
 * react에서 use로 시작되는 함수들 : Hook 함수라고 한다
 * Hook 함수 : 가로채기 함수
 * 		시스템(react)에 의해서 자동으로 실행되거나, 작동되는 일을 수행하는 함수들
 */
function BBsWrite() {
  const history = useHistory();

  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBBs] = useState({
    b_writer: "",
    b_subject: "",
    b_content: "",
    b_date: "",
    b_time: "",
  });

  const findByIdFetch = async () => {
    if (docId) {
      const result = await fireStore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  };

  // useEffect(alert(docId), []);
  useEffect(findByIdFetch, []);

  // onChange 이벤트 핸들러
  // 키보드로 입력한 데이터를 bbs 객체에 setting하는 일을 수행
  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // JSON 데이터를 JSONString으로 바꾸기
    // const str = JSON.stringify(bbs);
    // alert(str);

    const saveBBS = {
      ...bbs,
      /**
       * bbs.b_date의 값이
       * 	1. ""이 아니면 bbs.b_date를 b_date 칼럼에 저장하고
       * 	2. ""이면 moment()... 값을 b_date 칼럼에 저장하라
       */
      b_date: bbs.b_date || moment().format("YYYY[-]MM[-]DD"),
      b_time: bbs.b_time || moment().format("HH:mm:ss"),
    };

    fireStore
      .collection("bbs")
      //   .add(saveBBS)
      .doc(docId)
      .set(saveBBS)
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };

  return (
    <>
      <div className="bbs_write">
        <div>
          <input
            name="b_writer"
            placeholder="작성자"
            onChange={onChange}
            defaultValue={bbs.b_writer}
          />
        </div>
        <div>
          {/* tag code 내에 작성하는 주석문 */}
          {/* 
			input tag의 onChange 이벤트 핸들러
			input box에 데이터(문자열)를 입력하면 
			입력된 데이터를 상태(변수, 객체)에 보관하는 역할을 수행한다.
        */}
        </div>
        <div>
          <input
            name="b_subject"
            placeholder="제목"
            onChange={onChange}
            defaultValue={bbs.b_subject}
          />
        </div>
        <div>
          <input
            name="b_content"
            placeholder="내용"
            onChange={onChange}
            defaultValue={bbs.b_content}
          />
        </div>
        <div>
          <button onClick={onClickSave}>저장</button>
        </div>
      </div>
    </>
  );
}

export default BBsWrite;
