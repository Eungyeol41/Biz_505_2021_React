import React from "react";
import { useAddrContext } from "../context/AppContextProvider";
import "../css/List.css";
import AddressItem from "./AddressItem";

function AddressList() {
  const { addrBook } = useAddrContext();

  const viewList = addrBook.map((item, index) => {
    return <AddressItem addr={item} key={item.a_id} index={index} />;
  });
  /*
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  });
*/
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>주소</th>
          <th>TEL</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}
export default AddressList;
