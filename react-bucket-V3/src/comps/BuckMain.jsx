import React, { useState, useEffect, useCallback } from "react";
import BuckInput from "./BuckInput";
import BuckList from "./BuckList";

import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
  // 버킷리스트를 담을 배열
  const [bucketList, setBuckList] = useState([]);
  // DB에 UPDATE 할 state
  const [saveBucket, setSaveBucket] = useState([]);

  const bucketFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/get");
    const bucketList = await res.json();
    // console.log(bucket);
    await setBuckList(bucketList);
  }, []);
  useEffect(bucketFetch, [bucketFetch]);

  const bucket_insert = async (bucket_text) => {
    const bucket = {
      b_id: uuid(),
      b_flag: 0,
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    // 화면에 보여질 리스트에 추가하기
    // 원래 있던 bucketlist에 새로운 bucket 추가하기
    await setBuckList([...bucketList, bucket]);

    const fetch_option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bucket),
    };
    await fetch("http://localhost:5000/api/bucket", fetch_option);
    // await bucketFetch();
  };

  // saveBucket에 변화가 생기면 putBucket이 감지를 한다.
  const putBucket = async () => {
    console.log(saveBucket);
    const putFetchOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saveBucket),
    };
    const result = await fetch("http://localhost:5000/api/bucket", putFetchOption);
    console.log(result.json());
  };
  useEffect(putBucket, [saveBucket]);

  const flag_change = (id) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = { ...bucket, b_flag: bucket.b_flag + 1 };
        setSaveBucket(_temp);
        return _temp;
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };

  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = { ...bucket, b_title: title };
        setSaveBucket(_temp);
        return _temp;
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };

  const bucket_complete = (id) => {
    const _complete = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = {
          ...bucket,
          b_end_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          b_end_check: !bucket.b_end_check,
        };
        setSaveBucket(_temp);
        return _temp;
      } else {
        return bucket;
      }
    });

    setBuckList(_complete);
  };

  const bucket_cancel = (id) => {
    const _cancel = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp = { ...bucket, b_cancel: !bucket.b_cancel };
        setSaveBucket(_temp);
        return _temp;
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
