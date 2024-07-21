import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center pt-1 text-white">
      <div className="container text-center text-md-start mt-4">
        <div className="row">
          {/* CONTENTS */}

          {/* ABOUT OUR GROUP */}
          <div className="col-md-12 col-lg-12 col-xl-4 mx-auto text-center">
            <h3 className="fw-bold mt-4">The Relaxing Koala</h3>
            <div className="text-center mt-3">
              ©2024{" "}
              <Link className="text-white" to="/home">
                The Relaxing Koala
              </Link>
            </div>
          </div>

          {/* Communities */}
          <div className="col-md-12 col-lg-12 col-xl-4 mx-auto mb-md-0 mb-4">
            <div className="text-center mt-4">
              <h6 className="text-uppercase fw-bold mb-4">Connect with us</h6>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn text-light btn-floating mx-1"
              >
                <FaFacebook className="display-6" />
              </button>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn text-light btn-floating mx-1"
              >
                <FaInstagram className="display-6" />
              </button>

              <button
                data-mdb-ripple-init
                type="button"
                className="btn text-light btn-floating mx-1"
              >
                <FaSquareXTwitter className="display-6" />
              </button>
            </div>
          </div>
          {/* CONTACT INFOR */}
          <div className="col-md-12 col-lg-12 col-xl-4 mx-auto mb-md-0 mb-4 text-center mt-1">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <FaHome />
              &nbsp; 2008, Glenferrie Road
            </p>
            <p>
              <FaEnvelope />
              &nbsp; theRelaxingKoala@gmail.com
            </p>
            <p>
              <FaPhoneAlt />
              &nbsp; + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      {/* Copyright */}
    </footer>
  );
}
export default Footer;
