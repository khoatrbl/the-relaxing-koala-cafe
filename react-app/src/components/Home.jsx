import CafeImage1 from "../assets/cat-sleeping-cafe.jpg";
import CafeImage2 from "../assets/hapi2.jpg";
import CafeImage3 from "../assets/rk-image-2.jpg";
import FinestCook from "../assets/finest-cook.jpg";
import CheesePizza from "../assets/cheese-pizza.jpg";
import PepperoniPizza from "../assets/pizza-with-drink.jpg";
import SpaghettiBolognese from "../assets/tomato-sauce-pasta.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container-fluid px-0">
        <div id="homeCarousel" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img
                src={CafeImage1}
                className="d-block w-100 c-img"
                alt="The Relaxing Koala"
              />
              <div class="carousel-caption mt-5 d-none d-md-block">
                <p className="mb-0 fs-3 text-uppercase">Welcome To</p>
                <h5 className="display-1 fw-bolder text-capitalize">
                  The Relaxing Koala
                </h5>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src={CafeImage2}
                className="d-block w-100 c-image"
                alt="The Relaxing Koala"
              />
              <div class="carousel-caption mt-5 d-none d-md-block">
                <p className="mb-0 fs-3 text-uppercase">Welcome To</p>
                <h5 className="display-1 fw-bolder text-capitalize">
                  The Relaxing Koala
                </h5>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src={CafeImage3}
                className="d-block w-100 c-image"
                alt="The Relaxing Koala"
              />
              <div class="carousel-caption mt-5 d-none d-md-block">
                <p className="mb-0 fs-3 text-uppercase">Welcome To</p>
                <h5 className="display-1 fw-bolder text-capitalize">
                  The Relaxing Koala
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container mt-5 secondary-bg">
          <div className="container">
            <div className="row text-center">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <h3 className="mx-5 mb-3">
                  WELCOME TO <br />
                  THE RELAXING KOALA
                </h3>
                <p className="mx-5 px-5 mx-sm-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit sequi minus quis et sapiente vero nostrum sunt
                  eveniet distinctio voluptate? Libero aut provident earum qui
                  amet consectetur magnam tempora reiciendis.
                </p>
                <div className="mt-2">
                  <Link className="redirect-buttons" to="/">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div className="col my-4 intro-item">
                <img className="intro-img" src={FinestCook} alt="Cook" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5 secondary-bg">
          <div className="container pt-3 pb-4">
            <div className="text-center">
              <h1>Our Best Sellers</h1>
            </div>
            <div className="text-center mx-5 px-5 py-1">
              <p className="px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quae eum fugiat sapiente harum ipsum architecto accusamus
                maiores voluptates natus ut distinctio facilis id nulla
                dignissimos consequuntur, placeat earum voluptas.
              </p>
            </div>
            <div className="row mt-1">
              <div className="col d-flex text-center justify-content-center">
                <div className="card menu-item">
                  <img
                    src={CheesePizza}
                    className="card-img-top menu-img"
                    alt="Cheese Pizza"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Traditional Cheese Pizza</h5>
                    <h5 className="card-text menu-price">$16.75</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center text-center">
                <div className="card menu-item">
                  <img
                    src={PepperoniPizza}
                    className="card-img-top menu-img"
                    alt="Pepperoni Pizza"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Traditional Pepperoni Pizza</h5>
                    <h5 className="card-text menu-price">$17.99</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center text-center">
                <div className="card menu-item">
                  <img
                    src={SpaghettiBolognese}
                    className="card-img-top menu-img"
                    alt="Spaghetti Bolognese"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Spaghetti Bolognese</h5>
                    <h5 className="card-text menu-price">$7.99</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4 py-2">
              <Link className="redirect-buttons menu-redirect" to="/menu">
                <span>Show More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
