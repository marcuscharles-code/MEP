
import '../assets/css/ContactDetails.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAddCall, MdEmail } from "react-icons/md";
import MapComponent from '../components/Map';

function ContactDetails() {
    return (
        <section className='contact-details-section'>
            <div className="contact-head">
                <h3>Contact Us</h3>
                <p>We are ready to respond to all your inquiries. Kindly contact us today.</p>
                <div className="contact-icon">
                    <div className="contact-inner">
                        <h5>Location:</h5>
                        <p><strong>Rick Head Office</strong></p>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaMapLocationDot />
                            <span>Km 14 Aba - Port Harcourt Express way | Port Harcourt</span>
                        </a>
                        <a href="tel:+2348037236306">
                            <MdAddCall />
                            <span>08037236306</span>
                        </a>
                        <a href="mailto:info@rislng.com">
                            <MdEmail />
                            <span>info@rislng.com</span>
                        </a>

                        {/* <br /><br /> */}

                        {/* <p><strong>Rick Business Office</strong></p>
                        <a href="" target="_blank" rel="noopener noreferrer">
                        <FaMapLocationDot />
                            <span>No. 16 Chief Albert Iyorah Street, Lekki Phase 1, Lagos, Nigeria</span>
                        </a>
                        <a href="tel:07064186750">
                            <MdAddCall />
                            <span>07064186750</span>
                        </a> */}
                    </div>
                </div>
            </div>
            <MapComponent />
        </section>
    );
}

export default ContactDetails;
