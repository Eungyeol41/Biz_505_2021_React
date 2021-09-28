import React from "react";
import UUID from "react-uuid";

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
    <div>
      <div>
        {/* value값 지정 후 onChange event 제거하면 값 변경 불가 --> 자동으로 readOnly가 된다. */}
        <input value={address.a_name} name="a_name" placeholder="이름" onChange={onChangeHandler} />
        <input value={address.a_addr} name="a_addr" placeholder="주소" onChange={onChangeHandler} />
        <input value={address.a_tel} name="a_tel" placeholder="T.E.L" onChange={onChangeHandler} />
        <input value={address.a_age} name="a_age" placeholder="나이" onChange={onChangeHandler} />
        <button onClick={addrBookInsert}>추가</button>
      </div>
    </div>
  );
}

export default AddressInput;
