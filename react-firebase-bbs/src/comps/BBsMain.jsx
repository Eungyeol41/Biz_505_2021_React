import React from "react";
import "../css/board.css";

function BBsMain() {
  return (
    <div>
      <table>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
        <tr>
          <td>2021-09-09</td>
          <td>09:32:28</td>
          <td>홍길동</td>
          <td>BBS</td>
        </tr>
      </table>
    </div>
  );
}

export default BBsMain;
