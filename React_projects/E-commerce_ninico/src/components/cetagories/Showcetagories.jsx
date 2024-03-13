import React, { useState } from 'react'

import '../cetagories/Showcetagories.css'

const Categories = () => {

  const [show, setShow] = useState(true);

  const Showcategory = () => {

    if (show == true) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="container mx-auto px-8 absolute z-50">
        <button
          onClick={Showcategory} 
          className=" lg:w-44 md:w-32 py-3 bg-[#d51243] rounded-t-md"
        >
          <a href="#" className="space-x-2  text-white ">
            <i class="fa-solid fa-bars text-base "></i>
            <span className=" text-base font-semibold"> Categories</span>
          </a>
        </button>
        {show && (
          <>
            <ul className="menu  text-black bg-[#fff] border border-slate-100 w-44">
              <li className="ml-5 pt-2 mt-3">
                <a href="#" className="text-base space-x-3  ">
                  <i class="fa-regular fa-user text-[#d51243] "></i>
                  <span className=" text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Candles
                  </span>
                </a>
              </li>

              <li className="ml-5 pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-user text-[#d51243]  "></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Handmade
                  </span>
                  <i class="fa-solid fa-arrow-right text-base text-gray-400 hover:text-[#d51243] "></i>
                </a>

                <ul className=" menu text-left  text-base  bg-[#fff] border border-slate-100">
                  <li className="ml-2  pt-4 hover:text-[#d51243]  transition ease-in-out">
                    <a href="#">Chair</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Table</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Wooden</a>
                  </li>
                  <li className="ml-2 hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Furniture</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Clock</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Gifts</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Crafts</a>
                  </li>
                </ul>
              </li>


              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-solid fa-shoe-prints text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Gift Sets
                  </span>
                </a>
              </li>

              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-face-smile text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Plastic Gifts
                  </span>
                </a>
              </li>

              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-futbol text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Handy Cream
                  </span>
                </a>
              </li>

              <li className="ml-5 pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-solid fa-crown text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Cosmetics
                  </span>
                </a>
              </li>


              <li className="ml-5 pb-5 mt-3">
                <a href="#" className=" text-base space-x-3 ">
                  <i class="fa-solid fa-gift text-[#d51243]"></i>
                  <span className="text-base hover:text-[#d51243]  transition ease-in-out ">
                    Silk Accessories
                  </span>
                </a>
              </li>
            </ul>
            <div className="daily-offer text-[113x] bg-gray-100  py-5 w-44">
              <ul className="ms-5 text-black font-semibold">
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    Value of the Day
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    Top 100 Offers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  )
}



export default Categories



export const Categories2 = () => {

  const [show, setShow] = useState(false);

  const Showcategory = () => {

    if (show == true) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="container mx-auto px-8 absolute z-50">
        <button
          onClick={Showcategory} 
          className=" lg:w-44 md:w-32 py-3 bg-[#d51243] rounded-t-md"
        >
          <a href="#" className="space-x-2  text-white ">
            <i class="fa-solid fa-bars text-base "></i>
            <span className=" text-base font-semibold"> Categories</span>
          </a>
        </button>
        {show && (
          <>
            <ul className="menu  text-black bg-[#fff] border border-slate-100 w-44">
              <li className="ml-5 pt-2 mt-3">
                <a href="#" className="text-base space-x-3  ">
                  <i class="fa-regular fa-user text-[#d51243] "></i>
                  <span className=" text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Candles
                  </span>
                </a>
              </li>

              <li className="ml-5 pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-user text-[#d51243]  "></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Handmade
                  </span>
                  <i class="fa-solid fa-arrow-right text-base text-gray-400 hover:text-[#d51243] "></i>
                </a>

                <ul className=" menu text-left  text-base  bg-[#fff] border border-slate-100">
                  <li className="ml-2  pt-4 hover:text-[#d51243]  transition ease-in-out">
                    <a href="#">Chair</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Table</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Wooden</a>
                  </li>
                  <li className="ml-2 hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Furniture</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Clock</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Gifts</a>
                  </li>
                  <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                    <a href="#">Crafts</a>
                  </li>
                </ul>
              </li>


              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-solid fa-shoe-prints text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Gift Sets
                  </span>
                </a>
              </li>

              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-face-smile text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Plastic Gifts
                  </span>
                </a>
              </li>

              <li className="ml-5  pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-regular fa-futbol text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Handy Cream
                  </span>
                </a>
              </li>

              <li className="ml-5 pt-1.5 mt-3">
                <a href="#" className="text-base space-x-3 ">
                  <i class="fa-solid fa-crown text-[#d51243]"></i>
                  <span className="text-base  hover:text-[#d51243]  transition ease-in-out ">
                    Cosmetics
                  </span>
                </a>
              </li>


              <li className="ml-5 pb-5 mt-3">
                <a href="#" className=" text-base space-x-3 ">
                  <i class="fa-solid fa-gift text-[#d51243]"></i>
                  <span className="text-base hover:text-[#d51243]  transition ease-in-out ">
                    Silk Accessories
                  </span>
                </a>
              </li>
            </ul>
            <div className="daily-offer text-[113x] bg-gray-100  py-5 w-44">
              <ul className="ms-5 text-black font-semibold">
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    Value of the Day
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    Top 100 Offers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="relative hover:text-[#d51243]">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  )
}