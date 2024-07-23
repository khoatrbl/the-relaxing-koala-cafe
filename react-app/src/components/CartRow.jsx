import Pasta from "../assets/tomato-sauce-pasta.jpg";
function CartRow() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="cart-item">
            <img src={Pasta} className="cart-img" />
          </div>
        </div>
        <div className="col-7 ms-3 mt-2">
          <div>
            <h2>Spaghetti Bolognese</h2>
          </div>
          <div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="d-flex">
            <h5>Qty:</h5>
            <span className="ps-2">
              <input
                type="text"
                name="quantity"
                value="1"
                className="quantity-control w-25"
              ></input>
            </span>
          </div>
        </div>
        <div className="col d-flex justify-content-end mt-2 pe-3">
          <h4>$7.99</h4>
        </div>
      </div>
      <div className="row mt-3">
        <hr />
      </div>
    </>
  );
}

export default CartRow;
