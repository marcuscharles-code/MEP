import '../assets/css/Footer.css';
import Logo2 from '../assets/images/Logo2.png'
import { Link } from 'react-router-dom';
import { MdEdit, MdMail, MdLocationOn, MdOutlineCall } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <div className='footer-content'>

        <div className='footer-info'>
          <a className='hero-logo'>
            <span>MEP</span>
          </a>

          <div className='quick-links'>
            <h4><mark>Quick</mark> Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <a href=''><FaFacebookF size={18} /></a>
            <a href=''><FaXTwitter size={18} /></a>
            <a href=''><FaLinkedinIn size={18} /></a>
            <a href=''><FaInstagram size={18} /></a>
            <a href=''><FaYoutube size={18} /></a>
          </div>
        </div>

        <div className='footer-contact'>
          <h4><mark>Contact</mark> Us</h4>
          <p>
            <MdLocationOn />
            <span>
              Port Harcourt, Rivers State, Nigeria
            </span>
          </p>
          <p>
            <MdOutlineCall />
            <a href='tel:+2348000000000'>08000000000</a>
            <a href='tel:+2348000000000'>08000000000</a>
          </p>
          <p>
            <MdMail />
            <a href='mailto:info@mepengineering.com'>info@mepengineering.com</a>
          </p>
        </div>

        <div className='footer-news'>
          <h4><mark>Subscribe</mark> Us</h4>
          <p>Stay updated with our latest projects and engineering solutions.</p>
          <div>
            <input type='email' placeholder='Your Email' />
            <button><MdEdit /></button>
          </div>
        </div>

        <div>
          <a href="http://">Privacy Policy | Terms & Conditions</a>
        </div>

      </div>

      <div className='footer-copy'>
        <p>&copy; Copyright: MEP Engineering</p>
      </div>
    </footer>
  );
}