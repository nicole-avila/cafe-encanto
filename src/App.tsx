import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Product from "./Pages/Product/Product";
import Coffee from "./Pages/Coffee/Coffee";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
