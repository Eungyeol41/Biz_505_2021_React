import React from "react";
import "../css/BookInsert.css";

function BookInsert() {
  return (
    <div className="bookInsert">
      <div className="insert_div">
        <label>도서명</label>
        <input />
      </div>
      <div className="insert_div">
        <label>장르</label>
        <input />
      </div>
      <div>
        <button>리스트 추가</button>
      </div>
    </div>
  );
}

export default BookInsert;
