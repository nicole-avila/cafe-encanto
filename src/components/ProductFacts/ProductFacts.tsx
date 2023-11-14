import "./ProductFacts.scss";
import seeMore from "../../assets/plus-icon.svg";

export default function ProductFacts() {
  function handelIconClick() {
    console.log("klick");
  }
  return (
    <div className="facts">
      <div className="facts__content">
        <strong>Allergener</strong>
        <img
          className="facts__icon"
          src={seeMore}
          alt="round light green icon with a submitt inside, to read more"
          onClick={handelIconClick}
        />
      </div>
      <hr />

      <div className="facts__content">
        <strong>Kan innehålla spår av</strong>
        <img
          className="facts__icon"
          src={seeMore}
          alt="round light green icon with a submitt inside, to read more"
          onClick={handelIconClick}
        />
      </div>
      <hr />

      <div className="facts__content">
        <strong>Ingredienser</strong>
        <img
          className="facts__icon"
          src={seeMore}
          alt="round light green icon with a submitt inside, to read more"
          onClick={handelIconClick}
        />
      </div>
      <hr />

      <div className="facts__content">
        <strong>Näringsdeklaration</strong>
        <img
          className="facts__icon"
          src={seeMore}
          alt="round light green icon with a submitt inside, to read more"
          onClick={handelIconClick}
        />
      </div>
      <hr />
    </div>
  );
}
