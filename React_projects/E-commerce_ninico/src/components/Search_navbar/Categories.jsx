import React, { useState } from "react";
import '../Search_navbar/Categories.css'

const Togglebar_offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="togglebar-button" onClick={openMenu}>
        <a href="#">
          <i class="fa-solid fa-bars   text-gray-700 lg:hidden md:inline sm:inline mt-2 "></i>
        </a>
      </button>
      <div
        className={`togglebar_btn z-10 fixed top-8 bg-black ${
          isOpen ? "open" : " close"
        }`}
      >
        <button
          className="close-button flex items-center text-white  font-semibold bg-[#d51243] p-2.5 w-full absolute"
          onClick={closeMenu}
        >
          <h5 className="text-xs mx-auto ">
            CLOSE <i class="fa-solid fa-xmark text-xs "></i>
          </h5>
        </button>

        <div className="text-xs font-semibold text-white  mt-14 text-center">
          <h5>WHAT ARE YOU LOOKING FOR?</h5>
        </div>
        <div className="search-info relative px-2 mt-5">
          <button className="search-icon absolute top-2 right-9">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            className="   bg-slate-100 border-white rounded-sm outline-0 text-sm "
          />
        </div>
        <div className="px-2 mt-5 flex justify-between">
          <button className="rounded-sm text-xs px-10 text-white bg-[#d51243] p-3">
            MENU
          </button>
          <button className="rounded-sm text-xs px-5 mx-2 font-semibold text-black bg-white p-3">
            CATEGORIES
          </button>
        </div>

        <div className="nav-item text-white px-2 mt-6 ">
          <nav>
            <ul className="dropdown-home">
              <li className="drop-down text-xs font-semibold relative ">
                <a
                  href="#"
                  className="hover:text-[#d51243]  transition ease-in-out "
                >
                  Home
                </a>
                <button>
                  <span className="ms-48 border border-slate-100 ">
                    <i class="fa-solid fa-plus  px-0.5"></i>
                  </span>
                </button>
              </li>
              <div className="border border-slate-800 mt-3"></div>
            </ul>

            <ul className="dropdown-home mt-3">
              <li className="drop-down text-sm font-semibold relative ">
                <a
                  href="#"
                  className="hover:text-[#d51243]  transition ease-in-out "
                >
                  Shop
                </a>
                <button className=" ">
                  <span className="ms-48 border border-slate-100 ">
                    <i class="fa-solid fa-plus  px-0.5"></i>
                  </span>
                </button>
              </li>
              <div className="border border-slate-800 mt-3"></div>
            </ul>

            <ul className="dropdown-home mt-3">
              <li className="drop-down text-xs font-semibold relative ">
                <a
                  href="#"
                  className="hover:text-[#d51243]  transition ease-in-out "
                >
                  Pages
                </a>
                <button className="">
                  <span className="ms-48 border border-slate-100 ">
                    <i class="fa-solid fa-plus px-0.5  "></i>
                  </span>
                </button>
              </li>
              <div className="border border-slate-800 mt-3"></div>
            </ul>
<ul className="dropdown-home mt-3">
              <li className="drop-down text-xs font-semibold relative ">
                <a
                  href="#"
                  className="hover:text-[#d51243]  transition ease-in-out "
                >
                  Blog
                </a>
                <button className=" ">
                  <span className="ms-48 border border-slate-100 ">
                    <i class="fa-solid fa-plus px-0.5 "></i>
                  </span>
                </button>
              </li>
              <div className="border border-slate-800 mt-3"></div>
            </ul>

            <ul className="dropdown-home mt-3">
              <li className="drop-down text-xs font-semibold relative ">
                <a
                  href="#"
                  className="hover:text-[#d51243]  transition ease-in-out "
                >
                  Contact
                </a>
              </li>
              <div className="border border-slate-800 mt-3"></div>
            </ul>
          </nav>
        </div>

        <div className="user text-white flex space-x-2 mx-2 mt-2 text-xs font-semibold hover:text-[#d51243]  transition ease-in-out">
          <div className="icon">
            <i class="fa-regular fa-user"></i>
          </div>
          <span>
            <a href="/">Login / Register</a>
          </span>
        </div>
        <div className="user text-white flex space-x-2 mx-2 mt-4 text-xs font-semibold hover:text-[#d51243]  transition ease-in-out">
          <div className="icon">
            <i class="fa-regular fa-heart"></i>
          </div>
          <span>
            <a href="/">Whishlist</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Togglebar_offcanvas;
