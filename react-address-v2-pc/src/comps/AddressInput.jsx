import React from "react";

function AddressInput({ input, setInput, address, setAddress }) {
  const changeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  };

  const clickInsert = () => {
    setAddress([...address, input]);
    console.log("hhii", address);
  };

  return (
    <div>
      <input name="u_name" onChange={changeInput} type="text" placeholder="이름을 입력하세요" />

      <input name="u_address" onChange={changeInput} type="text" placeholder="주소를 입력하세요" />

      <input name="u_tel" onChange={changeInput} type="text" placeholder="전화번호를 입력하세요" />

      <input name="u_age" onChange={changeInput} type="text" placeholder="나이를 입력하세요" />
      <div>
        <button onClick={clickInsert}>추가</button>
      </div>
    </div>
  );
}

export default AddressInput;
