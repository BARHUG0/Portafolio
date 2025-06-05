import style from "@components/Button.module.css";

function Button({ text, className }) {
  return (
    <div className={`${style.normal}  ${className || ""}`}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
