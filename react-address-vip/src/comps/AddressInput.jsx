import React from "react";
import "../css/Input.css";

import { useAddrContext } from "../context/AppContextProvider";

function AddressInput() {
  const {
    nameId,
    addrId,
    telId,
    ageId,
    address,
    onChangeHandler,
    addrBookInsert,
  } = useAddrContext();

  return (
    <div className="addressInput">
      <div className="input_div">
        <label>NAME</label>
        <input
          ref={nameId}
          name="a_name"
          value={address.a_name}
          placeholder="이름"
          onChange={onChangeHandler}
        />
      </div>
      <div className="input_div">
        <label>ADDRESS</label>
        <input
          ref={addrId}
          name="a_addr"
          value={address.a_addr}
          placeholder="주소"
          onChange={onChangeHandler}
        />
      </div>
      <div className="input_div">
        <label>TEL</label>
        <input
          ref={telId}
          name="a_tel"
          value={address.a_tel}
          placeholder="T.E.L"
          onChange={onChangeHandler}
        />
      </div>
      <div className="input_div">
        <label>AGE</label>
        <input
          ref={ageId}
          name="a_age"
          value={address.a_age}
          placeholder="나이"
          onChange={onChangeHandler}
        />
      </div>
      <div className="input_p">
        <p>이름 : {address.a_name}</p>
        <p>주소 : {address.a_addr}</p>
        <p>전화 : {address.a_tel}</p>
        <p>나이 : {address.a_age}</p>
      </div>
      <div>
        <button onClick={addrBookInsert}>추가</button>
      </div>
    </div>
  );
}

export default AddressInput;
