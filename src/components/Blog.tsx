import Aos from 'aos';
import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="blog" className="mt-20" data-aos="fade-up">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm text-[#7c4fe0] uppercase font-semibold tracking-wider
          text-default-950"
          >
            Our Blog
          </p>
          <h1 className="text-3xl md:text-4xl/tight font-semibold text-black mt-2 text-center">
            Check the latest news about our company in our blog
          </h1>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[75%] mx-auto gap-10 mb-20">
        <div className="bg-white shadow-sm rounded-md">
          <img
            src="/image/How_To_Enjoy_A_Summer_Holiday_On_A_Budget_medium_3_73ae1f7a19.png"
            alt=""
            className="w-full rounded-tl-md rounded-tr-md "
          />
          <div className="p-4">
            <h3 className="text-[16px] text-[#684ad3] font-semibold">
              Small Business Ideas In Nigeria For 2024
            </h3>
            <p className="text-sm py-2">
              As Nigeria’s economy continues to change, there are more new
              opportunities presented for you to launch your small business
              idea. This is because Nigeria is a vibrant hub for
              entrepreneurship, where the dynamic energy and relentless hustle
              of the people contribute to how commercially accommodating it is
              for many businesses of all kinds
            </p>
          </div>
        </div>
        <div className="bg-white shadow-sm">
          <img
            src="/image/IMG_1714_c6d1e2e5c8.jpg"
            alt=""
            className="w-full rounded-tl-md rounded-tr-md"
          />
          <div className="p-4">
            <h3 className="text-[16px] text-[#684ad3] font-semibold">
              How To Improve Your Cash Flow With Invoicing
            </h3>
            <p className="text-sm py-2">
              When you have more expenses than your income, your business can
              easily run into cash flow issues that often come from late or
              unpaid invoices. EasyPay Business gives you a better way to send
              invoices and payment reminders. These are some game-changing
              benefits of using invoicing on EsyPay Business:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
