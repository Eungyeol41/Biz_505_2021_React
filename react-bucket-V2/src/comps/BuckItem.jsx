import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우 중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
  const { flag_change, bucket_update, bucket_complete, bucket_cancel } = args;

  const [b_update, setB_Update] = useState({
    b_title: "",
    isEdit: false,
  });

  const onItemClick = (e) => {
    // e.currentTarget
    // 직접 이벤트가 설정된 tag

    // 아래에서 tr에 onClick 설정해놓음
    // TR은 currentTarget이 TD는 target이 된다.
    const itemTr = e.currentTarget;
    const b_id = itemTr.dataset.id;
    const itemTd = e.target;

    if (itemTd.tagName === "TD") {
      const className = itemTd.className;
      if (className.includes("b_flag")) {
        flag_change(b_id);
      } else if (className.includes("b_title")) {
        // input box가 나타나는 코드
        setB_Update({
          isEdit: true,
          b_title: bucket.b_title,
        });
      } else if (className.includes("b_end_date")) {
        // 완료 부분 클릭 시 현재 시간과 날짜가 나타날 수 있도록 하기
        // bucket_complete(bucket.b_id);

        const message = bucket.b_end_check ? "완료를 취소합니다" : "버킷을 완료했나요?";
        if (window.confirm(message)) {
          bucket_complete(b_id);
        }
      }
    }
    if (itemTd.tagName === "INPUT" && itemTd.type === "checkbox") {
      bucket_cancel(b_id);
    }
  };

  const bucket_keyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TR").dataset.id;
      setB_Update({ ...b_update, isEdit: false });

      bucket_update(b_id, b_title);
    } else if (e.keyCode === 27) {
      setB_Update({ ...b_update, isEdit: false });
    }
  };

  return (
    <tr
      className={bucket.b_cancel ? "cancel" : ""}
      key={bucket.b_id}
      data-id={bucket.b_id}
      onClick={onItemClick}
    >
      <td className="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
      <td className="b_start_date">{bucket.b_start_date}</td>
      {/* <td className="b_title">
        {b_update.isEdit ? (
          <input onKeyDown={bucket_keyDown} defaultValue={b_update.b_title} />
        ) : (
          <span className="b_title">{bucket.b_title}</span>
        )}
      </td> */}

      {b_update.isEdit ? (
        <td className="b_title">
          <input onKeyDown={bucket_keyDown} defaultValue={b_update.b_title} />
        </td>
      ) : (
        <td className="b_title">{bucket.b_title}</td>
      )}

      {/* <td className="b_end_date">{bucket.b_end_date}</td> */}
      {bucket.b_end_check ? (
        <td className="b_end_date">{bucket.b_end_date}</td>
      ) : (
        <td className="b_end_date">⊙</td>
      )}

      <td>
        <input type="checkbox" checked={bucket.b_cancel} />
      </td>
    </tr>
  );
}

export default BuckItem;
