import { createContext, useCallback, useState ,useEffect} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("userInfo",registerInfo);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");

    setUser(JSON.parse(user));
  }, []);

  
  

  const updateRegisterInfo = useCallback((updateCallback) => {
    setRegisterInfo((prevInfo) => updateCallback(prevInfo));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};