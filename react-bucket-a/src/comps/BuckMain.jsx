import React, { useState } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";

import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  const [bucketList, setBuckList] = useState([]);
  // {
  //   b_id: 0,
  //   b_flag: 0,
  //   b_start_date: "2021-09-13",
  //   b_title: "버킷리스트 시작",
  //   b_end_date: "",
  //   b_end_check: false,
  //   b_cancel: false,
  // },
  // {
  //   b_id: 1,
  //   b_flag: 0,
  //   b_start_date: "2021-09-13",
  //   b_title: "추석 추서억~",
  //   b_end_date: "",
  //   b_end_check: false,
  //   b_cancel: false,
  // },

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
  const bucket_complete = (id) => {
    bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: true,
        };
      } else {
        return bucket;
      }
    });
  };

  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complete: bucket_complete,
  };
  return (
    <div className="w3-container-fluid">
      <BuckInput bucket_insert={bucket_insert} />
      {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기 */}
      <BuckList
        args={args}
        // bucketList={bucketList}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    </div>
  );
}

export default BuckMain;
