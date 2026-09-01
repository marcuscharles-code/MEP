import '../assets/css/Header.css';
import { MdMail,  MdOutlineCall  } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      <div>
        <p>
          <MdMail size={16} />
          <a href='#'>info@mep.com</a>
        </p>
        <p>
          <MdOutlineCall  size={16} />
          <a href='#'>+234-000-000-000</a>
        </p>
      </div>
      <div>
       
        <span className='media-links'>
          <a href=''><FaFacebookF size={16} /></a>
          <a href=''><FaXTwitter size={16} /></a>
          <a href=''><FaLinkedinIn size={16} /></a>
          <a href=''><FaInstagram size={16} /></a>
          <a href=''><FaYoutube size={16} /></a>
        </span>
      </div>
    </header>
  );
}