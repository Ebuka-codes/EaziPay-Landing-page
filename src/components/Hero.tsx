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
          <div className="mt-[100px] ml:mt-[40px]  container ml:ml-[50px]  lg:mb-40">
            <h1 className="text-3xl px-2  md:text-5xl/tight lg:text-6xl/tight text-white tracking-normal capitalize leading-normal font-bold max-w-2xl mt-4">
              Bank Smarter, Live Better with RapidPay
              <span className="text-[#7c4fe0]"> Banking</span>
            </h1>
            <p className="text-base px-2 text-white font-normal max-w-lg mt-6 capitalize">
              Our app provides a multitude of features tailored to your needs.
              From personalized recommendations to exclusive offers.
            </p>

            <span className="flex px-2 flex-wrap items-center mt-10 gap-3">
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
          <div className="relative lg:mt-[100px] ml:mt-[40px]  lg:mb-20">
            <img
              src="/image/b25eb8676691cf388558882913e14d97-removebg-preview.png"
              alt="appImage"
              className="md:h-[600px]  max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
