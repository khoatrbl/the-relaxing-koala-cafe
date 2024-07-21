import CafeImage from "../assets/cafe-restaurant.jpg";
import CheesePizza from "../assets/cheese-pizza.jpg";
import PepperoniPizza from "../assets/pizza-with-drink.jpg";
import SpaghettiBolognese from "../assets/tomato-sauce-pasta.jpg";
import Espresso from "../assets/espresso-3.jpg";
import Latte from "../assets/latte.jpg";
import Cappuccino from "../assets/cappuccino.jpg";

function Menu() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src={CafeImage} className="d-block w-100 c-img" alt="Cafe" />
              <div class="carousel-caption mt-5 d-none d-md-block d-sm-block">
                <h6 className="display-1 fw-bolder text-capitalize">
                  Our Menu
                </h6>
                <p className="mb-0 mx-5 px-5 fs-5 mx-md-2 px-md-2 mx-sm-0 px-sm-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate necessitatibus qui placeat neque dolor hic
                  obcaecati magni corporis natus beatae, asperiores cum amet.
                  Dolorum molestiae voluptatibus asperiores saepe sapiente enim?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid dark-bg w-100 m-0 p-0">
        <div className="container pt-sm-5 mt-sm-5 mt-lg-0 pt-lg-2">
          <div className="bg-light mt-4 mx-5 menu">
            <div className="row">
              <div className="col d-flex text-center justify-content-center pt-4">
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
              <div className="col d-flex justify-content-center text-center pt-4">
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
              <div className="col d-flex justify-content-center text-center pt-4">
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
            <div className="row">
              <div className="col d-flex text-center justify-content-center py-4">
                <div className="card menu-item">
                  <img
                    src={Latte}
                    className="card-img-top menu-img"
                    alt="latte"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Latte</h5>
                    <h5 className="card-text menu-price">$3.25</h5>
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
              <div className="col d-flex justify-content-center text-center py-4">
                <div className="card menu-item">
                  <img
                    src={Cappuccino}
                    className="card-img-top menu-img"
                    alt="cappuccino"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Cappuccino</h5>
                    <h5 className="card-text menu-price">$4.5</h5>
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
              <div className="col d-flex justify-content-center text-center py-4">
                <div className="card menu-item">
                  <img
                    src={Espresso}
                    className="card-img-top menu-img"
                    alt="Espresso"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Espresso</h5>
                    <h5 className="card-text menu-price">$3.5</h5>
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

            <div className="d-flex justify-content-center pt-3 pb-4">
              <button className="btn btn-download px-5 text-dark" type="button">
                Download Menu in PDF
                <span>&nbsp;&nbsp;→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
