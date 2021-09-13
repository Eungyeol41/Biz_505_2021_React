import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { fireStore } from "../config/BBSConfig";

function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBBs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const findByIdFetch = useCallback(async () => {
    if (docId) {
      const result = await fireStore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  }, [docId]);
  useEffect(findByIdFetch, [findByIdFetch]);

  const onDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      fireStore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push("/");
        });
      //   router.push(`/delete/${docId}`);
    }
  };

  return (
    <div className="bbs_detail">
      <div>
        <label>작성일자</label>
        <span>{bbs.b_date}</span>
      </div>
      <div>
        <label>작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label>작성자</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label>제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label>내용</label>
        <span>{bbs.b_content}</span>
      </div>
      <div className="bbs_btn_box">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          처음
        </button>
        <button
          onClick={() => {
            router.push(`/write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BBsDetail;
