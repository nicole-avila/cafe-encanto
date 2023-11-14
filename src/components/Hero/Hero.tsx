import "./Hero.scss";
import { ImageProps } from "../../interfaces";

export default function Hero({ image, className }: ImageProps) {
  return (
    <div className={className}>
      <img className="hero-image" src={image.src} alt={image.alt} />
    </div>
  );
}
