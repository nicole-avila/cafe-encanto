import "./SpecialEditon.scss";
import Button from "../Button/Button";
import imageChristmas from "../../assets/coffee-menu.jpg";

export default function SpecialEditon() {
  return (
    <div className="edition">
      <div className="edition__content">
        <h1 className="edition__title">
          Sipping joy in winter's cheer, <br /> Coffee's magic, the best time of
          the year.
        </h1>
        <Button btnText="Christmas Editon" />
      </div>

      <div className="edition__img-container">
        <img className="edition__img1" src={imageChristmas} alt="" />
        <img className="edition__img2" src={imageChristmas} alt="" />
      </div>
    </div>
  );
}
