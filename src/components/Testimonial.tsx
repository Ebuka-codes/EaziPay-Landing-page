import Aos from 'aos';
import React, { useEffect } from 'react';
const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  return (
    <section id="testimonial" className="mt-14 mb-20" data-aos="fade-up">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-sm text-[#7c4fe0] uppercase font-semibold tracking-wider text-default-950">
          Our Client
        </span>
        <h2 className="text-3xl md:text-4xl/tight font-semibold mt-3">
          Stories From Our Customers
        </h2>
      </div>

      <div className="grid md:grid-cols-2 grid-col-1  ml:grid-cols-3 mt-14 gap-x-10 gap-y-5 w-[85%] mx-auto">
        <div className="p-6 rounded-xl border border-default-200">
          <h3 className="text-[18px] font-semibold text-default-950">
            Best service here!
          </h3>
          <p className="text-base font-normal mt-4 mb-4 text-muted">
            "I've tried many services, but none compare to the excellence
            provided here! From start to finish, the team has been attentive,
            professional, and committed to delivering the best results."
          </p>
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/image/user1.jpeg"
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#7c4fe0]">
                {' '}
                Micheal Charles
              </h3>
              <p className="text-sm font-medium mt-1">
                Finance Manager at Mango
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-default-200">
          <h3 className="text-[18px] font-semibold text-default-950">
            It's just incredible!
          </h3>
          <p className="text-base font-normal mt-4 mb-4 text-muted">
            I am extremely delighated with the exceptional service provided by
            NioLand. Their expert support system, efficient tools, and strategic
            solutions have truly....
          </p>
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/image/user2.jpeg"
                alt=""
                className="w-[45px] h-[45px]  rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#7c4fe0]">
                {' '}
                James John
              </h3>
              <p className="text-sm font-medium mt-1">
                Finance Manager at Mango
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-default-200">
          <h3 className="text-[18px] font-semibold text-default-950">
            Satisfied user here!
          </h3>
          <p className="text-base font-normal mt-4 mb-4 text-muted">
            As a satisfied user, I can confidence say that my experience with
            NioLand has been outstanding. The service, support, and solutions
            provided have...
          </p>
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/image/user3.jpg"
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#7c4fe0]">
                {' '}
                Mercy Blessing
              </h3>
              <p className="text-sm font-medium mt-1">
                Finance Manager at Mango
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
