import "./Button.scss";
import { button } from "../../interfaces";

export default function Button(btnText: button) {
  return (
    <>
      <button className="btn">{btnText.btnText}</button>
    </>
  );
}
