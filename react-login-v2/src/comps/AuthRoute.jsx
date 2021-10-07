/**
 * Login을 수행해야 열어볼 수 있는 페이지들을 통합 관리할 컴포넌트
 */
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUser } from "../modules/fetchModules";

const AuthRoute = ({ children }) => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  // Login이 되어있는 지 확인하는 코드 (fetchCb - useCallback & useEffect)
  // user state 정보가 정말 로그인한 정상 사용자인 지 알 수 있는가!
  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userId) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록 하는 것
  useEffect(fetchCb, [fetchCb]);

  if (!user.userId) {
    history.replace("/login");
  }

  // <AuthRoute>내용</AuthRoute>
  return <>{children}</>;
};

export default AuthRoute;
