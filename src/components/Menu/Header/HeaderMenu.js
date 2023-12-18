import { TokenContext } from "contexts/Login/TokenContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "./HeaderMenu.css";
import { LoginContext } from "contexts/Login/LoginContext";

const Button = styled.button`
  border: 0;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(LoginContext);

  function handleLogin() {
    navigate("/login");
  }

  function handleMypage() {

  }

  useEffect(() => {
    console.log(userInfo);
  },[userInfo]);

  return (
    <div className="header-menu">
      {userInfo.isLogin ? (
        <Button onClick={handleMypage}>내 정보</Button>
      ) : (
        <Button onClick={handleLogin}>로그인</Button>
      )}
    </div>
  );
}
