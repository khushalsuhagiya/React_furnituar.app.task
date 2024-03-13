import React from "react";
import asset0 from "../../assets/asset 0.png"
import asset82 from "../../assets/asset 82.jpeg";
import asset83 from "../../assets/asset 83.jpeg";
import asset84 from "../../assets/asset 84.png";

const Footer = () => {
  return (
    <>
      <section className="pt-16 mt-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-8">
          <div className="row">
            <div className="main-footer mb-7 border-b border-[#e0e0e0]">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-3 md:col-span-4 ">
                  <div className="logo mb-7">
                    <a href="/">
                      <img src={asset0} alt="logo" />
                    </a>
                  </div>
                  <div className="footer-content text-[#777] text-[16px] w-56">
                    <p>
                      Elegant pink origami design three dimensional view and
                      decoration co-exist. Great for adding a decorative touch
                      to any room’s decor.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-2 md:col-span-4">
                  <div className="footer-information ml-7 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Information
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">FAQs</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Ordering Tracking</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Contacts</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      My Account
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links">
                          <a href="/">Delivery Information</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Privacy Policy</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Discount</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Terms Condition</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Social Network
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links ">
                          <a href="/">
                            <i class="fa-brands fa-facebook-f w-8 text-black "></i>
                            Facebook
                          </a>
                        </li>
                        <li className="footer-links">
<a href="/">
                            <i class="fa-brands fa-dribbble w-8 text-black"></i>
                            Dribbble
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-twitter w-8 text-black"></i>
                            Twitter
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-behance w-8 text-black"></i>
                            Behance
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-youtube w-8 text-black"></i>
                            Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Get Newsletter
                    </h4>
                    <p className="text-[17px] text-[#777] mb-4">
                      Get on the list and get 10% off your first order!
                    </p>
                    <div className="form">
                      <form action="">
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="text-xs h-10 w-64 rounded-md px-7 py-0 mb-2 text-[#777] outline-0"
                        />
                        <button className="btn bg-[#d51243] px-8 py-4 text-slate-50 rounded-md">
                          Subscribe Now
                          <i class="fa-solid fa-arrow-right mx-2 transition hover:translate-x-1  hover:ease-in-out"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-cta pb-5">
              <div className="row items-center">
                <div className="grid grid-cols-2">
                  <div className="footer-contact flex items-center">
                    <div className="icon mr-4">
                      <i class="fa-solid fa-phone-flip bg-white rounded-full p-3 shadow-md"></i>
                    </div>
                    <div className="text">
                      <a href="/" className="text-[20px] font-bold leading-3 ">
                        980.029.666.99
                      </a>
                      <p className="text-[14px] font-normal text-[#777]">
                        Working 8:00 - 22:00
                      </p>
                    </div>
                  </div>
                  <div className="footer-source flex justify-end">
                    <div className="content mr-5">
                      <div className="title text-[18px] font-bold tracking-wide pb-1">
                        Download App on Mobile
                      </div>
                      <p className="text-[14px] text-[#777] leading-3">
                        15% discount on your first purchase
                      </p>
                    </div>
                    <div className="button flex items-center space-x-1">
                      <a href="/">
                        <img src={asset82} alt="" />
                      </a>
                      <a href="/">
                        <img src={asset83} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="footer-copyright pt-5 pb-6 bg-[#ededed]">
          <div className="container mx-auto px-2">
            <div className="row">
              <div className="grid grid-cols-2">
                <div className="copyright-content text-[16px] text-[#777]">
                  <span>
                    Copyright 2024
                    <a
                      href="/"
                      className="text-[#040404] font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                      &copy;Ninico.
                    </a>
                    <span> All rights reserved. Developed by</span>
                    <a
                      href="/"
                      className="text-[#040404] font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                      Ali Themes.
                    </a>
                  </span>
                </div>
                <div className="copyright-brand items-center flex justify-end">
                  <img src={asset84} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;