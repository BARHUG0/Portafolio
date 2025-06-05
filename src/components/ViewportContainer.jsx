import style from "@components/ViewportContainer.module.css";

function ViewportContainer({ children, id }) {
  return (
    <div className={style.normal} id={id}>
      {children}
    </div>
  );
}

export default ViewportContainer;
