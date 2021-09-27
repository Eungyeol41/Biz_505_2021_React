import React from "react";

function AddressInput({ address, setAddress }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target; // 비구조화 문법
    /**
     * 계산식 속성 이름, CPN(Computed Property Name)
     * 변수이름을 변수값으로 생성하기
     * if(e.target.name === "u_name") {
     * 		setAddress({ ...address, "u_name": value });
     * } else if(e.target.name === "u_addr") {
     * 		setAddress({ ...addresss, "u_addr": value });
     * } 	ººº
     *
     * ============		============
     *
     * JS ES6 이상에서 새롭게 만들어진 변수 생성 문법
     * 변수를 []로 묶어주고 값을 저장하면 변수에 담긴 문자열로 변수를 생성해주는 구조
     * setAddress({ ...address, [name]: value });
     * const [name] = "대한민국"
     * 		--> name 변수가 아닌 name에 담긴 문자열이 변수가 되는 구조
     *
     * CPN(Computed Property Name) : 표현식을 사용하여 객체의 key값을 정의하는 문법
     * 		'[name]: value'
     */
    setAddress({ ...address, [name]: value });
  };
  return (
    <div className="input_form">
      <div>
        <label>NAME</label>
        <input name="u_name" onChange={onChangeHandler} />
      </div>
      <div>
        <label>ADDR</label>
        <input name="u_addr" onChange={onChangeHandler} />
      </div>
      <div>
        <label>TEL</label>
        <input name="u_tel" onChange={onChangeHandler} />
      </div>
      <div>
        <label>AGE</label>
        <input name="u_age" onChange={onChangeHandler} />
      </div>
    </div>
  );
}

export default AddressInput;
