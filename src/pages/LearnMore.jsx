import '../assets/css/Learnmore.css';
import { Link } from 'react-router-dom';

function LearnMore() {
    return (
        <section className="learn-more-section" id='learn-more-section'>
            <div className="learn-more-content">
                <h3 className="learn-more-heading">
                    <span>Want to</span>
                    <mark className="highlight"> Learn More</mark>
                </h3>
                <p className="learn-more-subtext">how we help clients in risk?</p>
                <p className="learn-more-description">
                    Use our contact form to schedule an appointment, set up a test drive, or submit your questions or comments. 
                    We look forward to your feedback!
                </p>
              <Link to='/about'>
              <button className="learn-more-btn">LEARN MORE</button>
              </Link>
            </div>
        </section>
    );
}

export default LearnMore;
