import CartRow from "../components/CartRow";
function Cart() {
  return (
    <>
      <div className="container-fluid dark-bg px-0 py-5">
        <div className="container ps-5 light-bg">
          <div className="row pt-4">
            <div className="col d-flex justify-content-start align-items-end">
              <h3 className="text-capitalize">Shopping Cart</h3>
            </div>
            <div className="col d-flex justify-content-end align-items-end">
              <h4 className="pe-4">Price</h4>
            </div>
            <div>
              <hr />
            </div>
            <CartRow></CartRow>
            <CartRow></CartRow>
            <CartRow></CartRow>
          </div>

          <div className="row">
            <div className="col-11 text-end pe-1">
              <h3>Subtotal:</h3>
            </div>
            <div className="col-1 px-1">
              <h3>$23.97</h3>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
