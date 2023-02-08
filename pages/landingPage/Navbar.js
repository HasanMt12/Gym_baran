import { useState } from "react";
import Image from "next/Image";
const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
    <div className="lg:my-[31px]  lg:mb-20 mx-auto lg:h-[50px] lg:w-[1246px] lg:bg-transparent bg-white h-[94px] py-auto">
      <div className=" flex  justify-between items-center ">
      
        
        <Image className="lg:my-[6px] my-0 mt-2" src="/logo.png" width={141} height={60}></Image>
        
        
       
     

        <ul className=" items-center lg:my-[0] hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-normal text-black  text-[16px]   "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-normal text-black  text-[16px]   "
            >
              Program
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-normal text-black  text-[16px]  "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-normal text-black  text-[16px]   "
            >
              About us
            </a>
          </li>
          <li className="rounded-xl inline-flex items-center  justify-center h-[50px] w-[114px]  bg-[#264373] shadow-[0px 20px 80px] shadow-[#334e7b]">
            <a
           
              href="/"
              className="font-normal text-[#FFFFFF]  tracking-wide"
              aria-label="Sign up"
              title="Sign up"
            >
              Log in
            </a>
          </li>
        </ul>
        
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mt-8 mb-6 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium  "
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium  "
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium  "
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-medium  "
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
   </div>
    );
};

export default Navbar;