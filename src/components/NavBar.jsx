import NavItem from "@components/NavItem";

import style from "@components/NavBar.module.css";

function NavBar({ navItems }) {
  const navItemComponents = navItems.map((i) => (
    <NavItem key={i.name} name={i.name} url={i.url} />
  ));

  return (
    <nav className={style.base}>
      <ul>{navItemComponents}</ul>
    </nav>
  );
}

export default NavBar;
