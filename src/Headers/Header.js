import MainMenu from "../Menu/Main_menu";

function Header(props) {
  return (
    <header className="header">
      <div className="header__icon">
        <a href="/" class="link_codelia">
          메인 화면 이동 아이콘
        </a>
      </div>
      <div className="header__menu">
        <MainMenu />
      </div>
    </header>
  );
}

export default Header;
