import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// import react-router
// import route

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
