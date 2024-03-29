import UserMenu from "components/User/Menu/UserMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./UserProfile.css";

const Button = styled.button`
  border: 0;
  height: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export default function UserProfile(props) {
  const ref = useRef(null);
  const [isMenu, setIsMenu] = useState(false);

  const handleMenuClose = useCallback(
    (event) => {
      console.log(event.target);
      if (isMenu && (!ref.current || !ref.current.contains(event.target))) {
        setIsMenu(false);
      }
    },
    [isMenu]
  );

  useEffect(() => {
    if (isMenu) {
      window.addEventListener("click", handleMenuClose);
    } else {
      window.removeEventListener("click", handleMenuClose);
    }
    return () => {
      window.removeEventListener("click", handleMenuClose);
    };
  }, [isMenu, handleMenuClose]);

  function handleMenu() {
    setIsMenu(true);
  }

  return (
    <div className="user-profile" ref={ref}>
      <Button className="user-menu-btn" onClick={handleMenu}>
        {props.username}
      </Button>
      {isMenu && <UserMenu uid={props.uid} height={"25px"} width={"120px"} />}
    </div>
  );
}
