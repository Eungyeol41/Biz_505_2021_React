import React from "react";
import "../css/write.css";

function BBsWrite() {
  return (
    <div className="bbs_write">
      <div>
        <input className="write_input" placeholder="작성자"></input>
      </div>
      <div>
        <input className="write_input" placeholder="제목"></input>
      </div>
      <div>
        <input className="write_input" placeholder="내용"></input>
      </div>
      <div className="button">
        <button className="btn_save">저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
