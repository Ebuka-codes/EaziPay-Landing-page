import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#684ad3] w-full mt-5 py-[90px]">
      <span className="text-center text-white">
        <h1 className="ml:text-[3rem] text-[2.5rem] font-semibold">
          How EasyPay works?
        </h1>
        <p className="w-[80%] ml:w-[35%] mx-auto my-4">
          Explore the intuitive and powerful features of EasyPay, making it easy
          to build, customize, and launch effective landing pages in just a few
          steps.
        </p>
      </span>
      <div className="grid  ml:grid-cols-3 w-[80%] gap-10 mx-auto mt-20">
        <div className="text-white">
          <img
            src="/image/step-1.png"
            alt="download"
            className="w-[4rem] mx-auto"
          />
          <h4 className="font-semibold text-[1.5rem] mt-4 text-center">
            Install the App
          </h4>
          <p className="text-center my-3">
            Explore the intuitive and powerful features of EasyPay, making it
            easy to build, customize, and launch effective landing pages in just
            a few steps.
          </p>
        </div>

        <div className="text-white">
          <img
            src="/image/step-2.png"
            alt="download"
            className="w-[4rem] mx-auto"
          />
          <h4 className="font-semibold text-[1.5rem] mt-4 text-center">
            Setup your profile
          </h4>
          <p className="text-center my-3">
            Create and customize your profile to tailor your experience and
            connect with others quickly and effortlessly, ensuring a seamless
            journey.
          </p>
        </div>
        <div className="text-white">
          <img
            src="/image/step-3.png"
            alt="download"
            className="w-[4rem] mx-auto"
          />
          <h4 className="font-semibold text-[1.5rem] mt-4 text-center">
            Enjoy the features!
          </h4>
          <p className="text-center my-3 text-[1rem]">
            Utilize the app's powerful features designed to enhance your
            experience and productivity, helping you achieve more with ease.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Banner;
