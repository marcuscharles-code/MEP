
import '../assets/css/About.css';
import equip1 from '../assets/images/abtbg.jpg';
import { FaGreaterThan } from 'react-icons/fa';

function AboutPage({ isAboutPage }) {
  return (
    <section
      className={`about-section ${isAboutPage ? 'about-section--small' : ''}`}
      id='about-section'>
      <div className='abt-img'>
        <img
          className='img-bottom'
          src={equip1}
          alt='MEP Engineering'
        />
      </div>

      <div className='abt-content'>
        <div className='founder-name'>
          <span>
            WHO WE <mark> ARE</mark>
          </span>
          <span>Our Company</span>
        </div>

        <div className='about-txt'>
          <p>
            MEP Engineering is a professional building services company providing Mechanical, Electrical and Plumbing (MEP) solutions for residential, commercial, industrial and institutional projects.
          </p>
          <hr />
          <p>
            🔹Mission: Delivering reliable, efficient and quality MEP solutions that ensure safety and performance.
          </p>
          <p>
            🔹Vision: To be a trusted engineering company delivering smarter, safer and sustainable building solutions.
          </p>
        </div>

        <div className='why-us'>
          <h1>
            Why <mark>Choose Us</mark>
          </h1>

          <div className='reasons'>
            {[
              'Expertise in MEP Engineering',
              'Commitment to Safety and Quality',
              'Professional Standards and Service',
              'Reliable Project Delivery'
            ].map((reason, index) => (
              <div
                key={index}
                className='reason'
              >
                <mark><FaGreaterThan /></mark>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;