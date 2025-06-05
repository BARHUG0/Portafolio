import NavLogo from "@components/NavLogo.jsx";
import NavBar from "@components/NavBar.jsx";
import Button from "@components/Button.jsx";

import style from "@components/Header.module.css";

function Header({ logoSrc, navItems, ctaText }) {
  return (
    <header className={style.normal}>
      <NavLogo logoSrc={logoSrc} />
      <NavBar navItems={navItems} />
      <Button text={ctaText} className={style.flexButton} />
    </header>
  );
}

export default Header;
