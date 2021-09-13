import React from "react";
import "../css/bucketlist.css";

function BucketList() {
  return (
    <div className="bucketlist">
      <input
        className="bucket_input"
        placeholder="버킷리스트에 추가할 내용을 입력해주세요 ㅇㅂㅇ"
      ></input>
      <table className="bucket_table">
        <thead>
          <tr>
            <th>FLAG</th>
            <th>날짜</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>일반</th>
            <th>2021-09-13</th>
            <th>기능사 합격</th>
            <th>2021-10-14</th>
            <th>
              <input type="checkbox"></input>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BucketList;
