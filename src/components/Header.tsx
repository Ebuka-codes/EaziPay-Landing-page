import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* mobile-view */}
      <header
        id="home"
        className="fixed w-full z-[1000] shadow-sm py-[10px] bg-white ml:hidden"
      >
        <div className="flex justify-between items-center mx-4  sm:mx-20 ">
          <Link
            to="/"
            className="font-bold text-[24px] tracking-wider text-[#6045c5]"
          >
            Eazi
            <span className="text-[#6045c5]">Pay</span>
          </Link>

          <span onClick={() => setIsOpen((open) => !open)}>
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
              data-lucide="menu"
              className="lucide lucide-menu h-8 w-8 text-black"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </span>
        </div>

        {isOpen && (
          <nav className="mt-2 ml-6">
            <ul className="py-2 space-y-3 text-[13px] font-medium text-stone-500">
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link
                  to={'/'}
                  duration={100}
                  offset={-900}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link
                  to="feature"
                  smooth={true}
                  duration={100}
                  offset={-90}
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link
                  to="about"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link
                  to="testimonial"
                  smooth={true}
                  offset={-190}
                  onClick={() => setIsOpen(false)}
                >
                  Testimonial
                </Link>
              </li>
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link to="blog" smooth={true} duration={600} offset={-20}>
                  Blog
                </Link>
              </li>
              <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* destop-view */}
      <header className="hidden justify-between ml:items-center items-center gap-5 container py-4 overflow-y-hidden  ml:flex">
        <Link
          to={'/'}
          className="font-bold text-[2vw] tracking-wider text-[#6045c5] ml:block hidden"
        >
          Eazi<span className="text-white">Pay</span>
        </Link>

        <nav className="ml:block hidden">
          <ul className="flex gap-10 items-center font-medium text-white text-sm cursor-pointer">
            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to="feature" smooth={true} duration={100} offset={-50}>
                Features
              </Link>
            </li>
            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to="about" smooth={true} duration={500} offset={-50}>
                About Us
              </Link>
            </li>
            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to="testimonial" smooth={true} duration={500} offset={-50}>
                Testimonial
              </Link>
            </li>

            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Contact Us
              </Link>
            </li>
            <li className="hover:text-blue-500 transition duration-300 ease-in-out">
              <Link to="blog" smooth={true} duration={600} offset={-40}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <button className="ml:flex bg-[#6045c5] rounded-[5px] hover:bg-[#684ad3] transition duration-300 ease-in-out text-white text-[15px] font-medium hidden justify-center items-center gap-2 py-[10px] w-[140px]">
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
            data-lucide="download-cloud"
            className="lucide lucide-download-cloud h-4 w-4 fill-white/40"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m8 17 4 4 4-4"></path>
          </svg>
          <span>Download</span>
        </button>
      </header>
    </>
  );
};
export default Header;
