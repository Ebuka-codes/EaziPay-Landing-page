import React, { useEffect } from 'react';
import Aos from 'aos';
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);
  return (
    <section data-aos="fade-up">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className="mt-[100px] ml:mt-[40px] container ml:ml-[50px]  lg:mb-40">
            <h1 className="text-[27px] md:text-5xl/tight ml-1  lg:text-[4.17vw] text-white tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
              Bank Smarter, Live Better with eaziPay
              <span className="text-[#7c4fe0] ml-1">Banking</span>
            </h1>
            <p className=" text-white font-medium max-w-lg mt-2 capitalize mb-10 tracking-[0.03vw] leading-6 text-sm">
              Our app provides a multitude of features tailored to your needs.
              From personalized recommendations to exclusive offers.
            </p>

            <span className="flex flex-wrap items-center mt-10 gap-3">
              <img
                src="/image/google.png"
                alt="app-store"
                className="w-[140px] h-12"
              />
              <img
                src="/image/store.png"
                alt="app-store"
                className="w-[140px] h-12"
              />
            </span>
          </div>
          <div className="relative lg:mt-[100px] ml:mt-[40px] mb-20 lg:mb-20">
            <img
              src="/image/Digital-Wallet-qgq768fa8mvydoqsuku9cs89p6be2q20tlpsvzh2cs.png"
              alt="appImage"
              className="md:h-[600px] max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
