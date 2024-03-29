import { createContext, useCallback, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [userInfo, setUser] = useState({
    isLogin: null,
    username: "",
    uid: null,
    email: "",
    profileImg: "",
  });

  const setUserInfo = useCallback(
    (key, value) => {
      setUser((prev) => ({ ...prev, [key]: value }));
    },
    [setUser]
  );

  const resetUserInfo = useCallback(() => {
    setUser(() => ({
      isLogin: false,
      username: "",
      uid: null,
      email: "",
      profileImg: "",
    }));
  }, [setUser]);

  return (
    <LoginContext.Provider value={{ userInfo, setUserInfo, resetUserInfo }}>
      {children}
    </LoginContext.Provider>
  );
}
