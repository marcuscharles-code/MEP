import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import "../assets/css/Navinfo.css";


function NavInfo() {
  return (
    <div className="navInfo-div">
      <div className="nav-contact-info">
          <span>
            <CiLocationOn />
          </span>
        <h1>
          2231 Johnstown Road Bensenville, IL 60106
        </h1>
      </div>

      <div className="nav-contact-info">
       
          <span>
            <FaPhoneAlt />
          </span>
          <h1>
          +1 345 5354 453
        </h1>
      </div>

      <div className="nav-contact-info">
        <span>
          <MdOutlineMail />
        </span>
        <h1>info@.com</h1>
      </div>

      <div className="nav-contact-info">
          <span>
            <IoShareSocial />
          </span>
        <h1>
          social icons
        </h1>
      </div>
    </div>
  );
}

export default NavInfo;
