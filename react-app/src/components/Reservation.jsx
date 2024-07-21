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
              <div class="carousel-caption mt-3 d-none d-md-block d-sm-block">
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
      <div className="container-fluid p-0 m-0 light-bg">
        <div>
          <form></form>
        </div>
      </div>
    </>
  );
}

export default Reservation;
