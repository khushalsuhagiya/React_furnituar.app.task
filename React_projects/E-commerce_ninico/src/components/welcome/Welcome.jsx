import React from 'react'

const Welcome = () => {
  return (
    <>
    <div className='bg-[#F3EEE7]'>
        <div className="container mx-auto px-8 py-2 ">
            <div className="row ">
                <div className="cols-12 ">
                    <span className='header text-md font-bold'>
                        Welcome to our international shop! Enjoy free shipping on orders $100 up.
                        <a href="/shop" className=' text-base  text-red-600 border-0 border-b-2 border-red-600'> Shop Now
                            <span className='ms-3'>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Welcome