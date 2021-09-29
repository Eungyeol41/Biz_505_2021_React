import React from "react";
import UUID from "react-uuid";
import "../css/Address.css";

function AddressInput({ stateGroup }) {
  //   const { stateGroup } = props;
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...address, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  return (
    <div className="addressInput">
      <div className="input_div">
        <label>NAME</label>
        <input value={address.a_name} name="a_name" placeholder="이름" onChange={onChangeHandler} />
      </div>
      <div className="input_div">
        <label>ADDRESS</label>
        <input value={address.a_addr} name="a_addr" placeholder="주소" onChange={onChangeHandler} />
      </div>
      <div className="input_div">
        <label>TEL</label>
        <input value={address.a_tel} name="a_tel" placeholder="T.E.L" onChange={onChangeHandler} />
      </div>
      <div className="input_div">
        <label>AGE</label>
        <input value={address.a_age} name="a_age" placeholder="나이" onChange={onChangeHandler} />
      </div>
      <div>
        <button onClick={addrBookInsert}>추가</button>
      </div>
    </div>
  );
}

export default AddressInput;
