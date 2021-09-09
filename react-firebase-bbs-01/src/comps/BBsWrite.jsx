import React, { useState } from "react";
import { fireStore } from "../config/BBSConfig.js";
import moment from "moment";

// props.history
/**
 * react-router-dom을 사용하여 Routing을 구현하면 메뉴에서 글쓰기를 클릭했을 때
 * 호출(Rendering) 된 컴포넌트이다
 *
 * 이 때 react-router-dom은 매개변수로 history라는 변수를 전달한다
 * history 변수는 routing과 관련된 변수이다
 * history.push(URL) : URL로 redirect!
 */
function BBsWrite({ history }) {
  const [bbs, setBBs] = useState({
    b_write: "",
    b_subject: "",
    b_content: "",
  });

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
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };

    fireStore
      .collection("bbs")
      .add(saveBBS)
      //   .doc()
      //   .set(saveBBS)
      .then((doc) => {
        console.log(doc);
        history.push("/");
      });
  };

  return (
    <>
      <div className="bbs_write">
        <div>
          <input name="b_write" placeholder="작성자" onChange={onChange} />
        </div>
        <div>
          <input name="b_subject" placeholder="제목" onChange={onChange} />
        </div>
        <div>
          <input name="b_content" placeholder="내용" onChange={onChange} />
        </div>
        <div>
          <button onClick={onClickSave}>저장</button>
        </div>
      </div>
      <div>{/* tag code 내에 작성하는 주석문 */}</div>
    </>
  );
}

export default BBsWrite;
