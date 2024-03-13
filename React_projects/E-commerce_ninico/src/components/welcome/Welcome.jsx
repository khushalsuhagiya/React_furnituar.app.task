import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className='bg-[#F3EEE7]'>
        <div className="container mx-auto px-8 py-2 ">
            <div className="row ">
                <div className="cols-12 ">
                    <span className='header text-md font-bold'>
                        Welcome to our international shop! Enjoy free shipping on orders $100 up.
                        <Link href="/shop" className=' text-base  text-red-600 border-0 border-b-2 border-red-600'> Shop Now
                            <span className='ms-3'>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Welcome

export const Welcome2 = () => {
    return (
      <>
        <div className="bg-[#e7e7e7]">
          <div className="container mx-auto px-2 py-1 ">
            <div className="row ">
              <div className="grid grid-cols-12 sm:text-start items-center">
                <div className="lg:col-span-7 col-span-12">
                  <span className="welcome font-bold text-xs line">
                    Welcome to our international shop! Enjoy free shipping on
                    orders $100 up.
                  </span>
                  <span className="header-welcome-text space-x-3  relative font-semibold text-xs text-[#d51243]">
                    <Link
                      to="/shop"
                      href=""
                      className="font-bold font-serif after:absolute after:content-[''] after:bottom-[-3px] after:h-[1px] after:w-full after:bg-[#d51243] after:left-0 "
                    >
                      Shop Now
                    </Link>
                    <span>
                      <i class="fa-solid fa-arrow-right transition hover:translate-x-1  hover:ease-in-out "></i>
                    </span>
                  </span>
                </div>
  
                <div className="col-span-5 lg:inline hidden">
                  <div className="flex justify-end space-x-7">
                    <div className="account text-[14px] font-bold hover_text ">
                      <Link  to="#" href="">
                        <i class="fa-regular fa-user"></i>
                        <span className="ms-2">Account</span>
                      </Link>
                    </div>
                    <div className="track_order text-[14px] mx-5 hover_text">
                      <Link to="#" href="">
                        <i class="fa-solid fa-plane-departure transition hover:translate-x-1  hover:ease-in-out"></i>
                        <span className="ms-2 font-bold">Track Your Order</span>
                      </Link>
                    </div>
                    <div className="icon text-[14px] space-x-2 ">
                      <Link to="#" href=""></Link>
                      <i class="fa-brands fa-facebook-f hover_text"></i>
                      <Link to="#" href="">
                        <i class="fa-brands fa-twitter hover_text"></i>
                      </Link>
                      <Link to="#" href="">
                        <i class="fa-brands fa-behance hover_text"></i>
                      </Link>
                      <Link to="#" href="">
                        <i class="fa-brands fa-youtube hover_text"></i>
                      </Link>
                      <Link to="#" href="">
                        <i class="fa-brands fa-linkedin hover_text"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  