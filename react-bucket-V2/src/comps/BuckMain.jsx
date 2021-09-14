import React, { useState } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";

import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBuckList] = useState([]);
  //   {
  //     b_id: 0,
  //     b_flag: 0,
  //     b_start_date: "2021-09-13",
  //     b_title: "버킷리스트 시작",
  //     b_end_date: "",
  //     b_end_check: false,
  //     b_cancel: false,
  //   },
  //   {
  //     b_id: 1,
  //     b_flag: 0,
  //     b_start_date: "2021-09-13",
  //     b_title: "추석 추서억~",
  //     b_end_date: "",
  //     b_end_check: false,
  //     b_cancel: false,
  //   },

  const bucket_insert = (bucket_text) => {
    const bucket = {
      b_id: uuid(),
      b_flag: 0,
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    setBuckList([...bucketList, bucket]);
  };

  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return { ...bucket, b_flag: bucket.b_flag + 1 };
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };

  // 리스트에서 input box에 버킷을 변경한 후 Enter를 누르면 실행할 함수
  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return { ...bucket, b_title: title };
      } else {
        return bucket;
      }
    });
    // 원래의 list를 새로운 list로 바꾸기
    setBuckList(_bucketList);
  };

  /**
   * JS에서
   * 	문자열 변수에 담긴 값이 ""이거나 null이거나 undefined이거나
   * 	숫자형 변수에 담긴 값이 0이거나 NaN 등 이러한 값이면
   *
   * 변수와 함께 논리연산자가 묶였을 때
   * Ex )
   * let 변수 = ""
   * 변수 || 와 같은 코드를 만나면 이 결과는 false가 된다
   *
   * 변수 = 변수 || "대한민국" 이라는 코드를 작성하면
   * 1. 원래 변수에 ""이 담겨있으므로 '변수 ||' 은 false가 되고
   * 2. OR 연산을 수행하려고 시도한다.
   * 3. 양쪽 값이 모두 true일 때만 true가 되고 변수 || 연산은 false이므로
   * 	이후에 나타나는 코드를 수행하여 좌항의 변수에 대한민국 문자열을 담게 된다.
   *
   * 변수 = "" || "우리나라" 와 같은 코드를 만나게 되면
   * 	변수에는 '우리나라'라는 문자열이 담기게 된다.
   *
   * 변수 = "대한민국" || "우리나라" 와 같은 코드를 만나면 앞단에서 이미 true 연산이 되고
   * 	변수에는 '대한민국' 이라는 문자열이 담기게 된다.
   */
  const bucket_complete = (id) => {
    const _complete = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: !bucket.b_end_check,
        };
      } else {
        return bucket;
      }
    });

    setBuckList(_complete);
  };

  const bucket_cancel = (id) => {
    const _cancel = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_cancel: !bucket.b_cancel,
        };
      } else {
        return bucket;
      }
    });
    setBuckList(_cancel);
  };

  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complete: bucket_complete,
    bucket_cancel,
  };
  return (
    <div className="w3-container-fluid">
      <BuckInput bucket_insert={bucket_insert} />

      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기 */}
      <BuckList args={args} />
    </div>
  );
}

export default BuckMain;
