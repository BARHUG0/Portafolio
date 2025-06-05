import style from "@components/Title.module.css";

function Title({ text }) {
  return (
    <div className={style.normal}>
      <h2>{text}</h2>
    </div>
  );
}

export default Title;
