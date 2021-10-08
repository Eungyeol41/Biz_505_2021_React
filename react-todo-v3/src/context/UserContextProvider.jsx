import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/fetchModules.js";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onClick = () => {
    const { userId, password } = user;
    const resultUser = fetchLogin(userId, password);
    setUser(resultUser);
    history.replace("/");
  };

  const providerData = { user, setUser, onChange, onClick };

  return <UserContext.Provider value={providerData}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
