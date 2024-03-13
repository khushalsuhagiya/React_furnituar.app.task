import React, { useState, useContext } from 'react'

import { Object4 } from '../../App'

const Child_G = () => {
  const data4 = useContext(Object4)

  const [open, setopen] = useState();

  const A = () => {
    setopen("Oppo");
  };

  const B = () => {
    setopen("Samsung");
  };

  const a = data4.filter((data4) => data4.company == open);

  return (
    <div>
      <div className=' flex gap-10'>
        <button className="btn" onClick={A}>
          Show Oppo
        </button>
        <button className="btn" onClick={B}>
          Show Samsung
        </button>
      </div>

      <div>
        <ul className="px-3 space-x-10">
          <div className='flex gap-10'>
            {a.map((phones) => (
              <h1 className="p-4 border-2 mt-3 w-3/12  text-sm font-semibold" >
                <p>
                  <img src="https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true" alt="" />
                  {`detailes: ${phones.url}`}<br />
                </p>
                <br />
                <p>
                  {`company:  ${phones.company}`}<br />
                </p>
                <p>
                  {`name: ${phones.name}`}<br />
                </p>
                <p>
                  {`price: ${phones.price}`}<br />
                </p>
                <p>
                  {`color: ${phones.color}`}<br />
                </p>
                <p>
                  {`detailes: ${phones.detailes}`}<br />
                </p>
              </h1>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Child_G