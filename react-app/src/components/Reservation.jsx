import ReservationImg from "../assets/reservation-img.jpg";

function Reservation() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active r-item">
              <img
                src={ReservationImg}
                className="d-block w-100 r-img"
                alt="Cafe"
              />
              <div className="carousel-caption mt-3 d-none d-md-block d-sm-block">
                <h6 className="display-1 fw-bolder text-capitalize">
                  Make a Reservation
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
      {/* RESERVATION FORM */}
      <div className="container-fluid p-0 m-0 light-bg">
        <div>
          <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      {/* FORM SECTION */}
                      <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">
                            Student registration form
                          </h3>
                          {/* USERNAME */}
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1n"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1n"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* CONTACT INFORMATION */}
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  Phone number
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1n"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1n"
                                >
                                  Email
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* DATE AND TIME */}
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="date"
                                  id="form3Example1m"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  Date
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  type="time"
                                  id="form3Example1n"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1n"
                                >
                                  Time
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-4">
                              <div data-mdb-input-init className="form-outline">
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Note*"
                                ></textarea>
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1m"
                                >
                                  Note
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-start">
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-warning btn-lg px-5"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 d-none d-xl-block">
                        src={ReservationImg}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Reservation;
