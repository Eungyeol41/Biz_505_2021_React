import React, { useState } from "react";

function AddressInput({ address, setAddress, addressList, setAddressList }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target; // 비구조화 문법
    setAddress({ ...address, [name]: value });
  };

  const insertList = () => {
    setAddressList([...addressList, address]);
    console.log("hi", addressList);
  };

  return (
    <div className="input_form">
      <div>
        <input name="u_name" onChange={onChangeHandler} />
        <input name="u_addr" onChange={onChangeHandler} />
        <input name="u_tel" onChange={onChangeHandler} />
        <input name="u_age" onChange={onChangeHandler} />
      </div>
      <div>
        <button onClick={insertList}>추가</button>
      </div>
    </div>
  );
}

export default AddressInput;
