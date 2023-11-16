import "./SpecialEditon.scss";
import Button from "../Button/Button";
import imageChristmas from "../../assets/coffee-menu.jpg";
import { useNavigate } from "react-router-dom";

export default function SpecialEditon() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/menu");
  }

  return (
    <main className="edition">
      <section className="edition__content">
        <h1 className="edition__title">
          Sipping joy in winter's cheer, <br /> Coffee's magic, the best time of
          the year.
        </h1>
        <Button btnText="Christmas Editon" onClick={handleClick} />
      </section>

      <section className="edition__img-container">
        <img className="edition__img1" src={imageChristmas} alt="" />
        <img className="edition__img2" src={imageChristmas} alt="" />
      </section>
    </main>
  );
}
