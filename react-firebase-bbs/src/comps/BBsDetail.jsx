import React from "react";
import "../css/detail.css";

function BBsDetail() {
  return (
    <div>
      <div className="div_2">
        <span className="detail_span">작성일자</span>
        <input className="detail_input" name="b_write" readOnly="readonly" value="b_write" />
      </div>
      <div className="div_2">
        <span className="detail_span">작성시각</span>
        <input className="detail_input" name="b_write" readOnly="readonly" value="b_write" />
      </div>
      <div className="div_2">
        <span className="detail_span">작성자</span>
        <input className="detail_input" name="b_write" readOnly="readonly" value="b_write" />
      </div>
      <div className="div_2">
        <span className="detail_span">제목</span>
        <input className="detail_input" name="b_write" readOnly="readonly" value="b_write" />
      </div>
      <div className="div_2">
        <span className="detail_span">내용</span>
        <input className="detail_input" name="b_write" readOnly="readonly" value="b_write" />
      </div>
    </div>
  );
}

export default BBsDetail;
