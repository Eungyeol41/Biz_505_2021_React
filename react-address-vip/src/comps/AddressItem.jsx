import React from "react";

function AddressItem({ addr, index }) {
  const { a_name, a_addr, a_tel, a_age } = addr;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{a_name}</td>
      <td>{a_addr}</td>
      <td>{a_tel}</td>
      <td>{a_age}</td>
    </tr>
  );
}

export default AddressItem;
