import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchLogout } from "../modules/fetchModules";

function Logout() {
  const history = useHistory();
  const { setUser } = useUserContext();

  // user state 정보가 정말 로그인한 정상 사용자인 지 알 수 있는가!
  const fetchCb = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록 하는 것
  useEffect(fetchCb, [fetchCb]);

  return <div></div>;
}

export default Logout;
