import style from "@components/NavItem.module.css";

function NavItem({ name, url }) {
  return (
    <li className={style.normal}>
      <a href={url}>{name}</a>
    </li>
  );
}

export default NavItem;
