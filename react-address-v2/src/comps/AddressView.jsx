import React from "react";

function AddressView({ addressList }) {
  const user_body = addressList.map((user_address) => {
    return (
      <div className="view_home">
        <div>이름 : {user_address.u_name} </div>
        <div>주소 : {user_address.u_addr} </div>
        <div>전화번호 : {user_address.u_tel} </div>
        <div>나이 : {user_address.u_age} </div>
      </div>
    );
  });
  return <div>{user_body}</div>;
}

export default AddressView;
