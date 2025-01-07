import Aos from 'aos';
import React, { useEffect } from 'react';

const Banner2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  return (
    <section className="download-area has-overlay overlay-dark mt-20">
      <div className="container py-20" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 relative">
            <div className="content text-center space-y-5">
              <h2 className="text-white text-[3rem] leading-[1.2] font-semibold">
                easiPay is available for all devices
              </h2>
              <p className="text-white text-[1rem]">
                Enjoy the versatility of sApp, designed to seamlessly function
                on all devices. Whether you're using a smartphone, tablet, or
                desktop, download the app now and experience its powerful
                features anytime, anywhere!
              </p>

              <div className="button-group download-button justify-content-center">
                <a href="download.html">
                  <img src="image/google-play.png" alt="" />
                </a>
                <a href="download.html">
                  <img src="image/app-store.png" alt="" />
                </a>
              </div>
              <span className="d-block fst-italic fw-light text-white mt-3">
                * Available on iPhone, iPad and all Android devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="mt-[100px] image-container ">
    //   <div>
    //     <img
    //       src="image/istockphoto-2174612909-612x612.jpg"
    //       alt=""
    //       className="w-full h-[500px]"
    //     />
    //     <div className="overlay"></div>
    //     <div
    //       className="content w-full container ml-20 mr-20"
    //       data-aos="fade-up"
    //     >
    //       <h2 className="text-[2rem] lg:text-[2.6rem] text-white font-semibold">
    //         EasyPay is available for all devices
    //       </h2>
    //       <p className="text-center my-3 text-[15px] w-[65%] mx-auto">
    //         Enjoy the versatility of EasyPay, designed to seamlessly function on
    //         all devices. Whether you're using a smartphone, tablet, or desktop,
    //         download the app now and experience its powerful features anytime,
    //         anywhere!
    //       </p>
    //       <div className="flex items-center gap-2 justify-center mt-10">
    //         <img src="/image/google-play.png" alt="" className="w-[170px]" />
    //         <img src="/image/app-store.png" alt="" className="w-[170px]" />
    //       </div>

    //       <p className="text-white font-medium my-3">
    //         * Available on iPhone, iPad and all Android devices
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Banner2;
