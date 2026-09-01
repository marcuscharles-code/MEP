import '../assets/css/Team.css';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ceo from '../assets/images/ceo.webp';
import businessDevelopment from '../assets/images/businessDevelopment.webp';
import img2 from '../assets/images/Bg2.webp';
import richard from '../assets/images/richard.webp';
import blessing from '../assets/images/blessing.webp';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";




const teamMembers = [
    { name: 'Mr. RAMOS IHEKONA', position: 'MD/CEO', phone: '123-456-7890', img: ceo },
    { name: 'BETTY IHEKONA', position: 'HR MANAGER', phone: '987-654-3210', img: img2 },
    { name: 'MICHEAL OKOBI', position: 'OPERATIONS LEAD', phone: '987-654-3210', img: img2 },
    { name: 'NONSO ALONSO', position: 'BUSINESS DEVELOPMENT LEAD', phone: '987-654-3210', img: businessDevelopment },
    { name: 'JAPHET ADMIN', position: 'HSE/QAQC', phone: '987-654-3210', img: img2 },
    { name: 'RICHARD ALPHONSUS', position: 'MARKETING & SALES REP', phone: '987-654-3210', img: richard },
    { name: 'BLESSING NWALA', position: 'ACCOUNTANT', phone: '987-654-3210', img: blessing },
];

function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 700);

    // Update isWideScreen on resize
    useEffect(() => {
        const handleResize = () => setIsWideScreen(window.innerWidth >= 700);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Change image every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleSwipeLeft();
        }, 10000); // 10 seconds in milliseconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [isWideScreen, currentIndex]);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = teamMembers.length - (isWideScreen ? 2 : 1);
            return prevIndex === maxIndex ? 0 : prevIndex + 1;
        });
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = teamMembers.length - (isWideScreen ? 2 : 1);
            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <section className="team-section">
            <div className="team-header">
                <h1 className="team-title">
                    Our <mark className="highlight">Team</mark>
                </h1>
                <p className="company-name">Rick Metal Inc</p>
                <hr className="team-divider" />
            </div>

            <div className="team-description">
                <p className="team-summary">
                    We are a highly skilled team with years of engineering and design experience. Our goal is to surpass your expectations!
                </p>
                <p className="team-experience">
                    AirForce Trained Veteran / Precision T.I.G. & M.I.G. Welding, 39 Years!
                </p>


            </div>

            <div {...swipeHandlers} className="team-photo-container">
                <div className="team-photo">
                    <img
                        src={teamMembers[currentIndex].img}
                        alt={teamMembers[currentIndex].name}
                        className="team-img"
                    />
                    <span className="team-photo-overlay">
                        <p className="team-member-info">
                            <strong className="team-member-name">{teamMembers[currentIndex].name}</strong>
                            <span className="team-member-position">{teamMembers[currentIndex].position}</span>
                            <span className="team-member-phone"> <a href={`tel:${teamMembers[currentIndex].phone}`}>{teamMembers[currentIndex].phone}</a></span>
                        </p>
                    </span>
                </div>

                {isWideScreen && teamMembers[currentIndex + 1] && (
                    <div className="team-photo">
                        <img
                            src={teamMembers[currentIndex + 1].img}
                            alt={teamMembers[currentIndex + 1].name}
                            className="team-img"
                        />
                        <span className="team-photo-overlay">
                            <p className="team-member-info">
                                <strong className="team-member-name">{teamMembers[currentIndex + 1].name}</strong>
                                <span className="team-member-position">{teamMembers[currentIndex + 1].position}</span>
                                <span className="team-member-phone">{teamMembers[currentIndex + 1].phone}</span>
                            </p>
                        </span>
                    </div>
                )}

                <div className="arrow-container">
                    <FaArrowLeft className="arrow arrow-left" onClick={handleSwipeRight} />
                    <FaArrowRight className="arrow arrow-right" onClick={handleSwipeLeft} />
                </div>
            </div>
        </section>
    );
}

export default OurTeam;