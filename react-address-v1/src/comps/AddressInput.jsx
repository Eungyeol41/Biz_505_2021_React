import React from "react";

function AddressInput({ text, setText }) {
  const input_text = (e) => {
    const { value, name } = e.target;

    // const value = e.target.value;
    // const name = e.target.name;

    // console.log(value);
    // console.log(name);

    setText({ ...text, [name]: value });
  };
  return (
    <div>
      <div>
        <input name="name" onChange={input_text} placeholder="이름를 입력하세요." />
      </div>
      <div>
        <input name="addr" onChange={input_text} placeholder="주소를 입력하세요." />
      </div>
      <div>
        <input name="tel" onChange={input_text} placeholder="전화번호를 입력하세요." />
      </div>
      <div>
        <input name="age" onChange={input_text} placeholder="나이를 입력하세요." />
      </div>
    </div>
  );
}

export default AddressInput;
