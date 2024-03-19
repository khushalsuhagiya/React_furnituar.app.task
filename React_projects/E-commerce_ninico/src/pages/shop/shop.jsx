import React from "react";
import { Link } from "react-router-dom";
import Search_navbar from "../../components/Search_navbar/Search_navbar";
import shop from "../../assets/shop.jpg";
import Popular_product from "../../components/Shop_ditails/Product_ditails";
import Footer from "../../components/Footer/Footer";
import { Welcome2 } from "../../components/welcome/Welcome";
import { Navbarclik } from "../../components/Search_navbar/Homenavbar";

const Shop = () => {
  return (
    <>
      <Welcome2/>
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclik/>

      {/* shop image */}
      <section
        className="py-12 "
        style={{
          backgroundImage:`url(${shop}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-8">
          <div className="row items-center">
            <div className="grid md:grid-cols-7">
              <div className="shop_content">
                <div className="link mb-2 text-[16px]">
                  <span className="item_active relative font-normal pr-10 text-[#040404] after:absolute after:content-[''] after:h-[2px] after:w-[33px] after:bg-[#e4ded5] after:top-[50%] after:translate-x-[-50%] after:right-[-9px]">
                    <Link to='/' href="">Home</Link>
                  </span>
                  <span className="text-[#777]">Shop</span>
                  <h2 className="text-[44px] font-bold pt-1  font-mono">
                    Shop
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------- Filter area ---------------- */}

      <div className="filter_area pt-16 pb-5">
        <div className="container mx-auto px-8">
          <div className="row items-center">
            <div className="grid grid-cols-12">
              <div className="sm:col-span-6 col-span-12 ">
                <div className="proitem_count text-[18px] text-[#999] xs:mt-2 ">
                  <span>
                    <b className="text-black pr-1 ">10</b>Item On List
                  </span>
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <div className="pro_filter items-center space-x-3 flex sm:justify-end sm:mt-0 mt-3 ">
                  <select className=" border  shadow-sm p-2  outline-0 text-base font-normal text-[#212529] rounded-md xs:w-40 w-24 ">
                    <option className="w-20">Sort by (Default)</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>

                  <select className=" border  shadow-sm p-2  outline-0 text-base font-normal text-[#212529] rounded-md xs:w-40 w-24   ">
                    <option className="w-20">All</option>
                    <option>10 per Page</option>
                    <option>20 per Page</option>
                    <option>30 per Page</option>
                  </select>
                  <div className=" ">
                    <button className="nav-link shadow-xl">
                      <i class="fa-solid fa-list"></i>
                    </button>
                    <button className="nav-link text-[#d51243] md:ml-2 sm:ml-0 ml-2 ">
                      <i class="fa-solid fa-table-cells"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product area filter */}

      <section className="product_area pb-20">
        <div className="container mx-auto px-8">
        <div className="row">
            <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-2">
              <Popular_product/>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}

      <Footer/>
    </>
  );
};

export default Shop;
