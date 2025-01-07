import React, { useEffect } from 'react';
import Aos from 'aos';
const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  });
  return (
    <section id="feature" className="mt-14" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="text-center intro relative">
              <h2 className="title text-[2rem] lg:text-[3rem] tracking-[1px]">
                Explore Seamless Features
              </h2>
            </div>
            <p className="text-[16px] w-[90%] text-center mx-auto text-stone-500">
              Discover the unique features of sApp that set it apart from the
              competition, designed to deliver unmatched performance and
              seamless user experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-20 w-[85%] mx-auto mt-14 gap-10">
          <div>
            <div className="bg-[#f0ecff] bg-opacity-40 rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5] font-semibold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <span className="space-y-3">
              <h4 className="text-[22px] mt-[18px] font-medium text-center text-stone-800">
                Fund Transfer
              </h4>
              <p className="text-stone-600 text-center">
                Fast and reliable transactions both local and international
                transfers
              </p>
            </span>
          </div>
          <div>
            <div className="bg-[#f0ecff] bg-opacity-40  rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
            <span className="text-center space-y-3">
              {' '}
              <h1 className="text-[20px] font-medium mt-[18px] text-stone-900">
                Bill Payment
              </h1>
              <p className="text-stone-600">
                Pay utility bills, rent, and subscriptions and Set up recurring
                payments
              </p>
            </span>
          </div>
          <div>
            <div className="bg-[#f0ecff] bg-opacity-40  rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </div>
            <span className="space-y-3 text-center">
              <h4 className="text-[20px] font-medium mt-[18px]">ATM Card</h4>
              <p className="text-stone-500">
                View card details and statements and Temporarily block or freeze
                cards.
              </p>
            </span>
          </div>

          <div>
            <div className="bg-[#f0ecff] bg-opacity-40  rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
            <span className="space-y-3 text-center">
              <h4 className="text-[20px] font-medium mt-[18px]">Live Chat</h4>
              <p className="text-stone-600">
                Connect with our Chatbots or live chat support for help
              </p>
            </span>
          </div>

          <div>
            <div className="bg-[#f0ecff] bg-opacity-40  rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <span className="space-y-3 text-center">
              <h4 className="text-[20px] font-medium mt-[18px]">
                Efficient Security
              </h4>
              <p className="text-stone-600">
                Biometric authentication (fingerprint/face recognition) with
                end-to-end encryption
              </p>
            </span>
          </div>
          <div>
            <div className="bg-[#f0ecff] bg-opacity-40  rounded-full w-[50px]  h-[50px] flex flex-col items-center justify-center mx-auto p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#6045c5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <span className="space-y-3 text-center">
              <h4 className="text-[20px] font-medium mt-[18px]">
                Easy to Customize
              </h4>
              <p className="text-stone-500">
                Access exclusive deals and cashback offers and add more features
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
