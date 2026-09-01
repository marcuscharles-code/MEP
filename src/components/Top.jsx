import { FaAngleUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <span onClick={scrollToTop} className={`scroll-top ${isVisible ? 'active' : ''}`}>
      <FaAngleUp />
    </span>
  );
};

export default PageTop;

export { LoadTop, PageTop };