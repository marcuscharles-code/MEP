import '../assets/css/Review.css';
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import nnpc from '../assets/images/nnpc.webp';
import shell from '../assets/images/shell.webp';
import agip from '../assets/images/agip.webp';
import exon from '../assets/images/exon.webp';
import addax from '../assets/images/addax.webp';
import pan from '../assets/images/pan.webp';
import platformpet from '../assets/images/platformpet.webp';
import npdc from '../assets/images/npdc.webp';
import oarj from '../assets/images/oarj.webp';


function ReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: nnpc,
      text: "Turpis ligula, ornare molestie maximus eu, vestibulum id massa. Nam bibendum lorem quis ultrices maximus.",
    },
    {
      image: shell,
      text: "Integer interdum consectetur euismod. Phasellus pharetra est in lorem varius, ut malesuada leo tempor.",
    },
    {
      image: agip,
      text: "Vivamus commodo, lectus at aliquam consectetur, justo libero facilisis est, at dictum metus.",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextReview(),
    onSwipedRight: () => prevReview(),
    trackMouse: true, 
  });

  return (
    <section className='review-section'>
      <div className='review-header'>
        <p className='review-title'>
          What <span>People Say</span>
        </p>
        <h4 className='company-name'>Rick International Services</h4>
        <hr className='review-divider' />
      </div>

      <div className='review-content' {...handlers}>
        <div className='review-image'>
          <img src={reviews[currentIndex].image} alt='Review' />
        </div>
        <div className='review-text'>
          <p>{reviews[currentIndex].text}</p>
        </div>

        <div className='review-navigation'>
          <span className='nav-arrow back-arrow' onClick={prevReview}>
            <FaArrowLeft />
          </span>
          <span className='nav-arrow next-arrow' onClick={nextReview}>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ReviewPage;


