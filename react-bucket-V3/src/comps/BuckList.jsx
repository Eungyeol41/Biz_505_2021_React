import React from "react";
import BuckItem from "./BuckItem";

function BuckList(props) {
  /**
   * 부모 컴포넌트로부터 전달받은 bucketList를 사용하기 위해
   * 변수로 선언하기
   */
  const { bucketList, flag_change, bucket_update, bucket_complete } = props.args;

  const buckBody = bucketList.map((bucket) => {
    return (
      <BuckItem
        args={props.args}
        bucket={bucket}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    );
  });

  return (
    <table className="w3-table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>DATE</th>
          <th>BUCKET</th>
          <th>FINISH</th>
          <th>CANCEL</th>
        </tr>
      </thead>
      <tbody>{buckBody}</tbody>
    </table>
  );
}

export default BuckList;
