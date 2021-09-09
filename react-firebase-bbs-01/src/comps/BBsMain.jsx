import React, { useEffect, useState } from "react";
import "../css/BBs.css";
import { fireStore } from "../config/BBSConfig";

function BBsMain() {
  //   let bbsBody = [];
  const [bbsBody, setBBsBody] = useState([]);
  const firebaseFetch = () => {
    fireStore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((bbs) => {
          const item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_write}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };

  useEffect(firebaseFetch, []);

  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
