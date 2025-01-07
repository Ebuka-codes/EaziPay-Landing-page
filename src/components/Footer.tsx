import React from 'react';
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#272d38] py-4">
      <div className="mx-4">
        <div className="block sm:flex justify-between items-center px-3 md:px-10">
          <ul className="flex justify-center cursor-pointer gap-3 mb-3 sm:hidden">
            <li className="bg-[#2D3748]  p-2 rounded-full ">
              <Link to={'facebook'}>
                <FaFacebookF className="text-xl  text-stone-200" />
              </Link>
            </li>
            <li className="bg-[#2D3748]  p-2 group rounded-full">
              <Link to={'x'}>
                <FaXTwitter className="text-xl group  text-stone-200" />
              </Link>
            </li>
            <li className="bg-[#2D3748]  p-2 group rounded-full">
              <Link to={'whatsapp'}>
                <FaWhatsapp className="text-xl group  text-stone-200" />
              </Link>
            </li>
          </ul>

          <p className="text-base  text-white text-center sm:text-left">
            {new Date().getFullYear()}© EasyPay - All right reserverd.{' '}
          </p>

          <ul className="justify-center cursor-pointer gap-3 hidden sm:flex">
            <li className="bg-[#2D3748]  p-2 rounded-full group ">
              <Link to={'facebook'}>
                <FaFacebookF className="text-xl  text-stone-200" />
              </Link>
            </li>
            <li className="bg-[#2D3748]  p-2 group rounded-full">
              <Link to={'x'}>
                <FaXTwitter className="text-xl group  text-stone-200" />
              </Link>
            </li>
            <li className="bg-[#2D3748]  p-2 group rounded-full">
              <Link to={'whatsapp'}>
                <FaWhatsapp className="text-xl group  text-stone-200" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
