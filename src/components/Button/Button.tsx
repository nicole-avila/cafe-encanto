import "./Button.scss";
import { ButtonProps } from "../../interfaces";

export default function Button({ btnText, onClick }: ButtonProps) {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {btnText}
      </button>
    </>
  );
}
