import React from "react";
import { useHistory } from "react-router-dom";
import "../css/board.css";

function BBsMain() {
  const router = useHistory();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>작성일자</th>
            <th>작성시각</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr
            data-id="0001"
            onClick={(e) => {
              const id = e.target.closest("TR").dataset.id;
              //   alert("HI" + id);
              router.push(`/detail/${id}`);
            }}
          >
            <td>2021-09-10</td>
            <td>1:12:56</td>
            <td>REACT</td>
            <td>React & Firebase BBS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BBsMain;
