import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "../css/write.css";

function BBsWrite() {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="bbs_write">
      <div>
        <input name="b_writer" className="write_input" placeholder="작성자"></input>
      </div>
      <div>
        <input name="b_subject" className="write_input" placeholder="제목"></input>
      </div>
      <div>
        <input name="b_content" className="write_input" placeholder="내용"></input>
      </div>
      <div className="button">
        <button className="btn_save">저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
