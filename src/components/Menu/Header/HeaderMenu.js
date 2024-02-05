import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UserInfo from "../UserInfo/UserInfo";
import "./HeaderMenu.css";

const Button = styled.button`
  border: 0;
`;

export default function HeaderMenu() {
  const Ref = useRef(null);
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const { userInfo } = useContext(LoginContext);

  function handleLogin() {
    navigate("/login");
  }
  function handleMyMenu() {
    setIsMenu(!isMenu);
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="header-menu">
      <div className="header-menu-box">
        {userInfo.isLogin ? (
          <div className="user-menu-wrap" ref={Ref}>
            <Button onClick={handleMyMenu}>{userInfo.username}</Button>
            {isMenu ? (
              <UserInfo inputRef={Ref} isMenu={isMenu} setIsMenu={setIsMenu} />
            ) : null}
          </div>
        ) : null}
        {userInfo.isLogin === false ? (
          <Button onClick={handleLogin}>Sign In</Button>
        ) : null}
      </div>
    </div>
  );
}
