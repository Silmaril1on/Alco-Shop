import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Wine from "./components/wine/Wine";
import Beer from "./components/beer/Beer";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navigation />
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/store" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
