import Aos from 'aos';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section
      id="about"
      className="mt-20 w-[90%] mx-auto mb-20 text-center"
      data-aos="fade-up"
    >
      <span className="text-sm text-[#7c4fe0] uppercase font-semibold tracking-wider">
        About Us
      </span>
      <h1 className="font-semibold text-[1.6rem] ml:text-[2rem] text-center mb-3 mt-2">
        Banking Beyond Boundaries
      </h1>
      <div className="border-b-[2px] border-[#6045c5] w-[60px] mx-auto "></div>
      <p className="text-[16px] w-[90%] mx-auto leading-8 text-stone-500 mt-10">
        At EasyPay, we are redefining the way you bank, putting convenience,
        security, and innovation at your fingertips. Our mission is to empower
        individuals and businesses by providing seamless, accessible, and secure
        financial solutions tailored to modern needs. With features like instant
        fund transfers, bill payments, card management, and personalized
        financial insights, EasyPay ensures that you have complete control over
        your finances anytime, anywhere. Built with cutting-edge technology and
        a user-first approach, we prioritize your security, offering robust
        authentication methods and real-time fraud detection to protect your
        assets. Whether you're managing your daily expenses, planning for the
        future, or simply making life more convenient, EasyPay is here to
        simplify every step of your financial journey. Welcome to the future of
        banking. Welcome to EasyPay.
      </p>
    </section>
  );
};

export default About;
