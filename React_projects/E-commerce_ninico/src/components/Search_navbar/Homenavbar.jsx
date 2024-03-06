import React, { useState } from 'react'
import './Homenavbar.css'
import Categories from '../cetagories/Showcetagories'

function Homenavbar() {
    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <Categories/>
                    </div>
                    <div className="col-span-6 lg:inline hidden">
                        <div className="nav-item">
                            <nav>
                                <ul className="dropdown-home flex ml-10 py-3.5">
                                    <li className="drop-down  relative z-50">
                                        <a
                                            href="#"
                                            className="hover:text-[#d51243]  transition ease-in-out font-semibold"
                                        >
                                            Home
                                            <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300 "></i>
                                        </a>
                                        <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243] text-base">
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out translate-x-6 hover:translate-x-1    "
                                                >
                                                    Wooden Home
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Fashion Home
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Furniture Home
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Cosmetics Home
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Food Grocery
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-down ms-10  z-50">
                                        <a
                                            href="#"
                                            className="hover:text-[#d51243]  transition ease-in-out font-semibold"
                                        >
                                            Shop
                                            <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300"></i>
                                        </a>
                                        <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243] text-base">
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                                                >
                                                    Shop
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Shop 2
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Shop Details
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Shop Details 2
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Shop Location
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Cart
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Sign In
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Checkout
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Whishlist
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out"
                                                >
                                                    Product Track
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-down ms-10 z-50">
                                        <a
                                            href="#"
                                            className="hover:text-[#d51243]  transition ease-in-out font-semibold"
                                        >
                                            Pages
                                            <i class="angel fa-solid fa-angle-down ms-1   text-gray-300 hover:text-[#d51243]  transition ease-in-out "></i>
                                        </a>
                                        <ul className="mega-menu flex -ml-20 justify-around mt-3.5 text-base rounded-b-xl border-2 border-t-[#d51243] ">
                                            <li className="">
                                                <h6 className="title px-1 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                                                    Page Layout
                                                </h6>
                                                <li className="px-1 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Shop Filters V1</a>
                                                </li>
                                                <li className="px-1 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Shop Filters V2</a>
                                                </li>
                                                <li className="px-1 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Shop Sidebar</a>
                                                </li>
                                                <li className="px-1 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Shop Right Sidebar</a>
                                                </li>
                                                <li className="px-1 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Shop List View</a>
                                                </li>
                                            </li>
                                            <li className="">
                                                <h6 className="title py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                                                    Page Layout
                                                </h6>
                                                <li className="pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">About</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Cart</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Checkout</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Sign In</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Log In</a>
                                                </li>
                                            </li>
                                            <li className=" -ml-10">
                                                <h6 className="title py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                                                    Page Type
                                                </h6>
                                                <li className="pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Product Track</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Whishlist</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">404 / Error</a>
                                                </li>
                                                <li className="py-2 hover:text-[#d51243]  transition ease-in-out">
                                                    <a href="#">Coming Soon</a>
                                                </li>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-down ms-10 z-50">
                                        <a
                                            href="#"
                                            className="hover:text-[#d51243]  transition ease-in-out font-semibold"
                                        >
                                            Blog
                                            <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out  text-gray-300 "></i>
                                        </a>
                                        <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                            <li className="px-5 py-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                                                >
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="ms-10 text-base ">
                                        <a
                                            href="#"
                                            className="hover:text-[#d51243]  transition ease-in-out font-semibold"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-span-3 lg:inline hidden ">
                        <div className="flex justify-end text-base font-semibold">
                            <div className="menu-content py-3.5 mr-6">
                                <i class="fa-solid fa-phone-flip text-[#d51243] mr-2"></i>
                                <span>
                                    <a href="#">908. 408. 501. 89</a>
                                </span>
                            </div>
                            <div className="menu-content py-3.5">
                                <i class="fa-solid fa-location-dot text-[#d51243] mr-2"></i>
                                <span>
                                    <a href="#">Find Store</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homenavbar