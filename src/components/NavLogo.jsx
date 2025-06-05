import style from "@components/NavLogo.module.css";

function NavLogo({ logoSrc }) {
  return <p className={style.normal}>{logoSrc}</p>;
}

export default NavLogo;
