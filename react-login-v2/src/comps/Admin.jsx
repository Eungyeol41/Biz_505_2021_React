import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

/**
 * Login이 되어있을 때만 내용 확인 가능
 * Login이 되어있지 않을 경우 Login page로 redirect 수행
 *
 * 매우 간단한 인증 (클라이언트 인증)
 * 1. user state 정보가 있나?
 * 2. 있으면 관리자페이지를 보여주고
 * 3. 없으면 Login으로 redirect
 * 	=> user state에 있는 사용자 정보가 정말 server에서 인증한 정상 사용자인 지 알 수 있는 방법이 없다
 * 이런 상황이 발생하면 매우 보안에 위험한 상태가 된다
 *
 * 따라서..
 *
 * 다음과 같은 절차를 수행해야 한다 (Server 인증 절차)
 * 1. Page 선택 시 서버에 query를 전송
 * 		현재 로그인 된 세션이 있는 지 확인
 * 2. Login된 세션이 있으면 세션 정보를 user에 담고 페이지를 열어서 보여주기
 * 3. Login된 세션이 없다면 로그인 페이지로 redirect 수행
 */
function Admin({ role }) {
  const { user, setUser } = useUserContext();

  return (
    <div>
      <h1>ADMIN PAGE</h1>
      {role === "ADMIN" ? (
        <div>
          <h3>Login User</h3>
          <p>USER ID : {user.userId}</p>
          <p>USER E-mail : {user.email}</p>
        </div>
      ) : (
        <h3>⛔ 관리자만 볼 수 있음! ⛔</h3>
      )}
    </div>
  );
}

export default Admin;
