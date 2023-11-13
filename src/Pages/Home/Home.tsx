import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <h1> hero bild</h1>
      <Button btnText="Christmas Edition" />
      <Footer />
    </div>
  );
}
