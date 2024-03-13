import React from 'react'
import ninico from '../../assets/asset 0.png'
import Ukflag from '../../assets/asset 1.png'
import './Search_navbar.css'
import Togglebar_offcanvas from '../Search_navbar/Categories'



const Search_navbar = () => {
    return (
        <div>
            {/* ninico icon */}
            <section>
                <div className="container mx-auto px-8">
                    <div className="row items-center py-10">
                        <div className="grid grid-cols-12">
                            <div className="md:col-span-2 sm:col-span-3 xs:col-span-3 flex items-center  mt-3">
                                <Togglebar_offcanvas/>
                                <div className="logo  w-24 sm:w-32 md:w-40">
                                    <img src={ninico} alt="" className='' />
                                </div>
                            </div>
                            {/* Search bar */}
                            <div className="lg:col-span-5 md:col-span-8 sm:col-span-7 ">
                                <div className=" sm:inline hidden  icon py-1  ">
                                    <div className="search-info relative">
                                        <button className="search-icon absolute top-4 left-4">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Serach Products..."
                                            className=" input-field w-full py-4 px-10 bg-slate-100 border-white rounded-md outline-0 text-sm "
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* dropdown btn ukflag */}
                            <div className=" country col-span-2 xl:inline lg:inline md:hidden hidden  border border-slate-200 rounded-md ml-5 mr-4">
                                <div className="home-dropdown flex justify-between ">
                                    <div className="rounded flex items-center mx-auto space-x-2 py-2">
                                        <img src={Ukflag} alt="" className=" " />
                                        <span className="text-xs font-bold">English</span>
                                        <span className="angelgown text-[11px]">
                                            <i class="fa-solid fa-angle-down  text-gray-200 hover:text-[#d51243]"></i>
                                        </span>
                                        <div className="home-content pt-3 transition duration-700 ease-in-out ">
                                            <ul className="list rounded-sm text">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className=" text-base mx-4 hover:text-[#d51243]  transition ease-in-out duration-1000"
                                                    >
                                                        Arabic
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-base mx-4 hover:text-[#d51243]  transition ease-in-out duration-1000 "
                                                    >
                                                        Spanish
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-base mx-4 hover:text-[#d51243]  transition ease-in-out duration-1000"
                                                    >
                                                        Mandarin
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* dropdown USD,YEAN,EURO */}
                            <div className="col-span-1 xl:inline lg:inline md:hidden hidden ">
                                <select className="border py-4 text-lg w-24 rounded-md">
                                    <option value="" >USD </option>
                                    <option value="">YEAN </option>
                                    <option value="">EURO</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <div className="flex  mt-3  justify-end  w-28 ml-7 ">
                                    <div className="relative text-xl">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <div className=" px-1 rounded-full text-xs w-4  text-white absolute -top-1 -right-1 bg-[#D51243]">0</div>
                                    </div>

                                    <div className="ml-5 text-xl">
                                        <i class="fa-regular fa-user"></i>
                                    </div>

                                    <div className=" ml-5 relative text-xl"  >
                                        <i class="fa-regular fa-heart"></i>
                                        <div className="px-1 rounded-full text-xs w-4 text-white absolute -top-0 -right-2.5 bg-[#D51243]">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Search_navbar