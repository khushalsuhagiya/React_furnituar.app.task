// import React from 'react'
import Welcome from '../../components/welcome/Welcome'
import Search_navbar from '../../components/Search_navbar/Search_navbar'
import Homenavbar from '../../components/Search_navbar/Homenavbar'

import hello from '../../assets/asset 3.jpeg'
import hi from '../../assets/asset 4.jpeg'
import home from '../../assets/asset 5.jpeg'
import pencil from '../../assets/asset 6.jpeg'
import spoon from '../../assets/asset 7.jpeg'
import Popular_product from '../../components/Shop_ditails/Product_ditails'
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../home/Wooden_home.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import asset8 from '../../assets/asset 8.jpeg'
import asset9 from '../../assets/asset 9.svg'
import asset10 from '../../assets/asset 10.svg'
import asset11 from '../../assets/asset 11.svg'
import asset12 from '../../assets/asset 12.svg'
import asset13 from '../../assets/asset 13.svg'
import asset14 from '../../assets/asset 14.svg'

import asset75 from '../../assets/asset 75.png'


const Wooden_home = () => {
  return (
    <div>
      <Welcome />
      <Search_navbar />
      <Homenavbar />

      <div className="container mx-auto px-7">
        <div className="row">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12 h-[450px] w-[730px]">
              <Swiper
                spaceBetween={3}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img src={home} alt="" /></SwiperSlide>
                <SwiperSlide><img src={hello} alt="" /></SwiperSlide>
                <SwiperSlide><img src={hi} alt="" /></SwiperSlide>
              </Swiper>

            </div>

            <div className="lg:col-span-4 md:col-span-3 lg:inline md:inline sm:hidden  hidden overflow-hidden ">
              <a href="/">
                <div className="slider_banner_img relative    hover:scale-110 duration-1000 ">
                  <img
                    src={pencil}
                    alt=""
                    className=" lg:min-h-38 md:min-h-40 rounded-md h-[210px] w-[300px]"
                  />
                  <div className="banner_img_info absolute top-0 left-0 p-5">
                    <span className="sub_class text-xl text-[#d51243]">
                      Hand made
                    </span>
                    <h4 className=" font-semibold  text-xl w-52 ">
                      New Morden Stylist Crafts
                    </h4>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="slider_banner_img relative  hover:scale-110 duration-1000 ">
                  <img
                    src={spoon}
                    alt=""
                    className="mt-8 lg:min-h-38 md:min-h-40 rounded-md h-[210px] w-[300px] "
                  />
                  <div className="banner_img_info absolute top-0 left-0 p-6">
                    <span className="sub_class text-xl text-[#d51243]">
                      Popular
                    </span>
                    <h4 className=" font-semibold  text-xl">
                      Energy With our newest collection
                    </h4>
                  </div>
                </div>
              </a>
            </div>

            <section className="category_area pt-20">
              <div className="container mx-auto px-2">
                <div className="row flex items-center">
                  <div className="grid grid-cols-12">
                    <div className="top_cat_section mb-10 ">
                      <div className="top_cat_title font-bold text-2xl">
                        Top
                        <span className="font-light ms-2 tracking-tighter text-[#d51243] relative">
                          Categories
                          <img
                            src={asset8}
                            alt=""
                            className="absolute left-0  bottom-0 -z-50 "
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-[1090px] justify-between pb-11">
                  <div className="category text-center  border-0 border-r-2 border-gray-100 pr-5">
                    <div className="group relative cat_icon mb-5  bg-slate-50 rounded-full h-32 w-32 flex justify-center items-center ">
                      <img src={asset9} alt="" />
                      <span className="categories6 text-lg h-10 w-10 ">20</span>
                    </div>
                    <div className="lg:category_content">
                      <h5 className=" text-center font-semibold text-sm">
                        <a href="/" className='text-center'>Driftwood <br /> Table Decor</a>
                      </h5>
                    </div>
                  </div>
                  <div className="category  text-center border-0 border-r-2 border-gray-100 pr-5 ">
                    <div className="group relative cat_icon  mb-5  bg-slate-50 rounded-full h-32 w-32 flex justify-center items-center">
                      <img src={asset10} alt="" />
                      <span className="categories6 text-lg h-10 w-10">12</span>
                    </div>
                    <div className="category_content">
                      <h5 className="text-center font-semibold text-sm">
                        <a href="/">Floor Driftwood <br /> Sculpture</a>
                      </h5>
                    </div>
                  </div>
                  <div className="category text-center border-0 border-r-2 border-gray-100 pr-5 ">
                    <div className="group relative cat_icon  mb-5  bg-slate-50 rounded-full h-32 w-32 flex justify-center items-center">
                      <img src={asset11} alt="" />
                      <span className="categories6 text-lg h-10 w-10">03</span>
                    </div>
                    <div className="category_content">
                      <h5 className="text-center font-semibold text-sm">
                        <a href="/">Driftwood <br /> Christmas Tree</a>
                      </h5>
                    </div>
                  </div>
                  <div className="category text-center border-0 border-r-2 border-gray-100 pr-5 ">
                    <div className="group relative cat_icon   mb-5 bg-slate-50 rounded-full  h-32 w-32 flex justify-center items-center">
                      <img src={asset12} alt="" />
                      <span className="categories6 text-lg h-10 w-10">09</span>
                    </div>
                    <div className="category_content text-center">
                      <h5 className="text-center font-semibold text-sm ">
                        <a href="/">Wooden <br /> Bluetooth Speaker</a>
                      </h5>
                    </div>
                  </div>
                  <div className="category text-center border-0 border-r-2 border-gray-100 pr-5 ">
                    <div className="group relative cat_icon  mb-5  bg-slate-50 rounded-full  h-32 w-32 flex justify-center items-center">
                      <img src={asset13} alt="" />
                      <span className="categories6 text-lg h-10 w-10">10</span>
                    </div>
                    <div className="category_content ">
                      <h5 className="font-semibold text-sm text-center">
                        <a href="/">Recievers <br /> Amplifires</a>
                      </h5>
                    </div>
                  </div>
                  <div className="category relative text-center  ">
                    <div className="group cat_icon  mb-5  bg-slate-50 rounded-full  h-32 w-32 flex justify-center items-center">
                      <img src={asset14} alt="" />
                      <span className="categories6 text-lg h-10 w-10">05</span>
                    </div>
                    <div className="category_content">
                      <h5 className="text-center font-semibold text-sm ms-4">
                        <a href="/">Appetizer <br /> Plate Set</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr className='w-full border border-gray-100 my-8 ' />

          <section>
            <div className="container mx-auto px-2">
              <div className="row mt-28">
                <div className="grid grid-cols-12">
                  <div className="sm:col-span-6 col-span-12  ">
                    <div className="top_pro_section mb-9 ">
                      <div className="top_pro_title font-bold text-xl">
                        Popular
                        <span className=" font-light ms-2 tracking-tighter text-[#d51243] relative">
                          Products
                          <img
                            src={asset8}
                            alt=""
                            className="absolute left-0  bottom-1 -z-50 "
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6 col-span-12 ">
                    <div className="product_nav flex sm:justify-end sm:pb-0 pb-3">
                      <nav className="space-x-10 text-[17px] font-semibold">
                        <button className="text-[#d51243] underline">All</button>
                        <button>Popular</button>
                        <button>On sale</button>
                        <button>Best Rated</button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-4">
                <Popular_product />
              </div>

            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-2">
              <div className="theme_bg pt-10 pb-10 bg-[#f8f8f8]">
                <div className="row">
                  <div className="grid md:grid-cols-12 sm:grid-cols-6 lg:space-x-0 md:space-x-4">
                    <div className="col-span-6">
                      <div className="dealproduct md:ml-[68px]   ">
                        <div className="deal_product_img relative flex justify-center  ">
                          <img src={asset75} alt="dealproduct" />
                          <div className="dealproduct_offer text-center">
                            <h5 className="product_offer-price absolute  top-[75px] right-[155px] text-[26px] font-bold text-white bg-[#d51243] rounded-full py-3  px-4 animate-pulse">
                              <span className="text-[12px] block ">From</span>
                              $49
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="dealproduct_info pt-8 mr-10 md:ml-0  ml-5  ">
                        <div className="product_price mb-3 text-[22px] font-bold ">
                          <span className="text-[#d51243]">$49.00</span>
                          <del className="text-[#adadad] ">$59.00</del>
                        </div>
                        <div className="product_text mb-[30px]">
                          <h4 className="title mb-3 lg:text-[50px] md:text-2xl sm:text-[50px]  text-2xl text-black font-semibold tracking-tight">
                            <a href="/">Pro2 Abstract Folded Pots</a>
                          </h4>
                          <p className="text-[#777] lg:text-[18px] text-[17px] lg:leading-6 md:leading-5">
                            Elegant pink origami design three-dimensional view and
                            decoration co-exist. Great for adding a decorative touch
                            to any room’s decor. Wonderful accent piece for coffee
                            tables or side tables.
                          </p>
                        </div>
                        <div className="product_progress mb-8 bg-white w-full">
                          <div className="progress">
                            <div class="w-[75%]  rounded-full h-1.5 mb-4 ">
                              <div class="bg-[#d51243] h-1.5 rounded-full "></div>
                            </div>
                          </div>
                        </div>
                        <div className="product_count flex items-center">
                          <div className="count">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  )
}
export default Wooden_home