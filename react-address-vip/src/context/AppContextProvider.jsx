import { createContext, useContext, useRef, useState } from "react";
import UUID from "react-uuid";

const AppContext = createContext();

export const useAddrContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "NAME",
    a_tel: "TEL",
    a_addr: "ADDRESS",
    a_age: "AGE",
  });

  const [addrBook, setAddrBook] = useState([]);

  const nextId = useRef(0);
  const nameId = useRef();
  const addrId = useRef();
  const telId = useRef();
  const ageId = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value, a_id: nextId.current });
  };

  const addrClear = () => {
    setAddress({
      a_id: nextId.current,
      a_name: "",
      a_addr: "",
      a_tel: "",
      a_age: "",
    });
  };

  const addrBookInsert = () => {
    if (address.a_name == "") {
      window.alert("이름을 입력하세요");
      nameId.current.focus();
      return;
    }
    if (address.a_addr == "") {
      window.alert("주소를 입력하세요");
      addrId.current.focus();
      return;
    }
    if (address.a_tel == "") {
      window.alert("전화번호를 입력하세요");
      telId.current.focus();
      return;
    }
    if (address.a_age == "") {
      window.alert("나이를 입력하세요");
      ageId.current.focus();
      return;
    }

    setAddrBook([...addrBook, address]);
    // console.table(addrBook);
    nextId.current++;

    addrClear();
  };

  const providerData = {
    nameId,
    addrId,
    telId,
    ageId,

    address,
    setAddress,
    addrBook,
    setAddrBook,

    onChangeHandler,
    addrBookInsert,
  };

  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
