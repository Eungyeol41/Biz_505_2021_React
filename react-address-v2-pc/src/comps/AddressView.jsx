import React from "react";

function AddressView({ address }) {
  const user_body = address.map((user) => {
    return (
      <tr>
        <td>{user.u_name}</td>
        <td>{user.u_address}</td>
        <td>{user.u_tel}</td>
        <td>{user.u_age}</td>
      </tr>
    );
  });
  return (
    <table className="view_table">
      <thead>
        <tr>
          <th> NAME </th>
          <th> ADDRESS </th>
          <th> TEL </th>
          <th> AGE </th>
        </tr>
      </thead>
      <tbody>{user_body}</tbody>
    </table>
  );
}

export default AddressView;
