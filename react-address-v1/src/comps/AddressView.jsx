import React from "react";

function AddressView({ text }) {
  return (
    <div>
      <div>이름 : {text.name}</div>
      <div>주소 : {text.addr}</div>
      <div>전화번호 : {text.tel}</div>
      <div>나이 : {text.age}</div>
    </div>
  );
}

export default AddressView;
