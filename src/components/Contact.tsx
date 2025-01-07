import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^[0-9a-fA-F]+$/;
  const { handleSubmit, register, formState, reset } = useForm();
  const onsubmit = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  }: any) => {
    if (firstName || lastName || email || phoneNumber || message) {
      reset();
      toast.success('Thanks for contacting us', {
        id: 'success',
      });
    }
  };
  return (
    <section id="contact" className="bg-[#F6F9FE] w-full mt-20">
      {/* mobile-view */}

      <div className="py-10 px-4 block lg:hidden">
        <div>
          <span className="text-sm text-[#6045c5] uppercase font-semibold tracking-wider text-default-950 mb-6">
            Contact Us
          </span>
          <h1 className="text-2xl md:text-4xl/tight font-semibold mt-3">
            We're open to talk to good people.
          </h1>
          <div className="mt-10">
            <div className="h-12 w-12 rounded-full bg-[#f0ecff] mx-auto  bg-opacity-40 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="map-pin"
                className="lucide lucide-map-pin text-2xl text-[#7c4fe0]"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="text-base text-muted font-medium mb-1 mt-3">
              {' '}
              <h5 className="text-base text-center text-muted font-medium mb-1">
                {' '}
                123 King Street, London W60 10250
              </h5>
              <p className="text-xs text-center text-[#7c4fe0] font-bold uppercase mt-2">
                See More
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="h-12 w-12 rounded-full bg-[#f0ecff] mx-auto bg-opacity-40 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="mail"
                className="lucide lucide-mail text-2xl text-[#6045c5]"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="text-base text-muted font-medium mb-1">
              {' '}
              <h5 className="text-base text-center mt-3 text-muted font-medium mb-1">
                {' '}
                support@zoyothemes.com
              </h5>
              <p className="text-xs text-[#6045c5] mt-2 cursor-pointer text-center font-bold uppercase">
                See Hello
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="h-12 w-12 rounded-full bg-[#f0ecff] mx-auto bg-opacity-40 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="smartphone"
                className="lucide lucide-smartphone text-2xl text-[#6045c5]"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <div className="text-base text-muted font-medium mb-1">
              {' '}
              <h5 className="text-base text-center mt-3 text-muted font-medium mb-1">
                {' '}
                +234 - 9128474839
              </h5>
              <p className="text-xs text-center cursor-pointer text-[#6045c5] font-bold uppercase">
                Call Now
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:ms-24 mt-10">
          <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
            <form action="" onSubmit={handleSubmit(onsubmit)}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm/normal font-semibold text-black mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: {
                        value: 3,
                        message: 'Name is too short',
                      },
                    })}
                    name="firstName"
                    className="block w-full text-sm rounded-md border outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  />
                  <small className="text-red-500 text-[13px]">
                    {formState.errors?.firstName?.message as string}
                  </small>
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm/normal font-semibold text-black mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="last name"
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: {
                        value: 3,
                        message: 'Name is too short',
                      },
                    })}
                    name="lastName"
                    className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  />
                  <small className="text-red-500 text-[13px]">
                    {formState.errors?.lastName?.message as string}
                  </small>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/normal font-semibold text-black mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your eemail..."
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: emailRegex,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    name="email"
                    className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  />

                  <small className="text-red-500 text-[13px]">
                    {formState.errors?.email?.message as string}
                  </small>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm/normal font-semibold text-black mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Type phone number..."
                    {...register('phoneNumber', {
                      required: 'Phone number is required',
                      pattern: {
                        value: phoneNumberRegex,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                    name="phoneNumber"
                    className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  />

                  <small className="text-red-500 text-[13px]">
                    {formState.errors?.phoneNumber?.message as string}
                  </small>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Type message..."
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    name="message"
                    className="block w-full h-[100px] outline-none border text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  ></textarea>
                  <small className="text-red-500 text-[13px]">
                    {formState.errors?.message?.message as string}
                  </small>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="py-2 px-6 rounded-md text-baseitems-center justify-center border border-[#7c4fe0] text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                >
                  Send Messages <i className="mdi mdi-send ms-1"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* destop-view */}
      <div className="container mx-14 hidden lg:block">
        <div className="grid lg:grid-cols-3 gap-6 items-center py-10">
          <div>
            <span className="text-sm text-[#7c4fe0] uppercase font-semibold tracking-wider text-default-950 mb-6">
              Contact Us
            </span>
            <h1 className="text-2xl md:text-4xl/tight font-semibold mt-3">
              We're open to talk to good people.
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-[#f0ecff]  bg-opacity-40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="map-pin"
                  className="lucide lucide-map-pin text-2xl text-[#7c4fe0]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="text-base text-muted font-medium mb-1">
                {' '}
                <h5 className="text-base text-muted font-medium mb-1">
                  {' '}
                  123 King Street, London W60 10250
                </h5>
                <a
                  href="/"
                  className="text-xs text-center text-[#7c4fe0] font-bold uppercase"
                >
                  See More
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5  sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-[#f0ecff] bg-opacity-40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="mail"
                  className="lucide lucide-mail text-2xl text-[#7c4fe0]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="text-base text-muted font-medium mb-1">
                {' '}
                <h5 className="text-base text-muted font-medium mb-1">
                  {' '}
                  support@zoyothemes.com
                </h5>
                <a
                  href="/"
                  className="text-xs text-[#7c4fe0] font-bold uppercase"
                >
                  See Hello
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5  sm:text-start mt-10">
              <div className="h-12 w-12 rounded-full bg-[#f0ecff] bg-opacity-40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="smartphone"
                  className="lucide lucide-smartphone text-2xl text-[#7c4fe0]"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <div className="text-base text-muted font-medium mb-1">
                {' '}
                <h5 className="text-base text-muted font-medium mb-1">
                  {' '}
                  +234 - 9128474839
                </h5>
                <a
                  href="/"
                  className="text-xs text-[#7c4fe0] font-bold uppercase"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:ms-24">
            <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
              <form action="" onSubmit={handleSubmit(onsubmit)}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      {...register('firstName', {
                        required: 'First name is required',
                        minLength: {
                          value: 3,
                          message: 'Name is too short',
                        },
                      })}
                      name="firstName"
                      className="block w-full text-sm rounded-md border outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    />
                    <small className="text-red-500 text-[13px]">
                      {formState.errors?.firstName?.message as string}
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      {...register('lastName', {
                        required: 'Last name is required',
                        minLength: {
                          value: 3,
                          message: 'Name is too short',
                        },
                      })}
                      name="lastName"
                      className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    />
                    <small className="text-red-500 text-[13px]">
                      {formState.errors?.lastName?.message as string}
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your eemail..."
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: emailRegex,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      name="email"
                      className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    />

                    <small className="text-red-500 text-[13px]">
                      {formState.errors?.email?.message as string}
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm/normal font-semibold text-black mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Type phone number..."
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                          value: phoneNumberRegex,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                      name="phoneNumber"
                      className="border w-full text-sm rounded-md outline-none py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    />

                    <small className="text-red-500 text-[13px]">
                      {formState.errors?.phoneNumber?.message as string}
                    </small>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Type message..."
                      {...register('message', {
                        required: 'Message is required',
                      })}
                      name="message"
                      className="block w-full h-[100px] outline-none border text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    ></textarea>
                    <small className="text-red-500 text-[13px]">
                      {formState.errors?.message?.message as string}
                    </small>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-2 px-6 rounded-md text-baseitems-center justify-center border border-[#7c4fe0] text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                  >
                    Send Messages <i className="mdi mdi-send ms-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
