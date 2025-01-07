import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import Content from '../components/Content';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const handleScrollTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      setShowBtn(false);
      window.scrollTo({ top: 0 });
    }
  };
  const handleWindowScroll = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      const targetTop = targetElement.offsetTop;
      const scrollPostion = window.scrollY;
      if (scrollPostion >= targetTop) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);
  return (
    <div>
      <div className="container-bg">
        <Header />
        <Hero />
      </div>
      <Features />
      <Content targetRef={targetRef} />
      <About />
      <Banner />
      <Testimonial />
      <Banner2 />
      <Blog />
      <Contact />
      <Footer />
      {showBtn && (
        <div
          className="scroll_btn shadow-md hover:bg-[#5c42bb] transition duration-300 ease-in-out z-[20000]"
          onClick={handleScrollTarget}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </div>
      )}
      <Toaster />
    </div>
  );
};
export default HomePage;
