import shoppingCart from "../assets/shopping-cart.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="sticky-top">
        <nav
          className="navbar nav-underline navbar-expand-lg"
          data-bs-theme="dark"
        >
          <div className="container">
            <Link className="navbar-brand" to="/home">
              <h3>The Relaxing Koala</h3>
              <p className="mb-0">Coffee and Restaurant</p>
            </Link>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarToggleExternalContent"
            >
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item mx-3">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/reservation">
                    Reservation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ms-auto pe-2">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <img className="cart-icon" src={shoppingCart} alt="Cart" />
                  </Link>
                </li>
              </ul>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
