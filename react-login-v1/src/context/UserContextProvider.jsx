import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    password: "",
    re_password: "",
    email: "",
  });
  const providerData = { user, setUser };
  return <UserContext.Provider value={providerData}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
