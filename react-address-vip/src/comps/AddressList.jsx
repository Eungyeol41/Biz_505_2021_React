import React from "react";
import { useAddrContext } from "../context/AppContextProvider";
import "../css/List.css";
import AddressItem from "./AddressItem";

function AddressList() {
  const { addrBook } = useAddrContext();

  const viewList = addrBook.map((item, index) => {
    return <AddressItem addr={item} key={item.a_id} index={index} />;
  });

  return (
    <table className="addr_table">
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
