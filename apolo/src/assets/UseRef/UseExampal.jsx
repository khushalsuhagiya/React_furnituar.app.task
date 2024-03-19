import { useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(0);
  const [Click, setClick]= useState(0)

  function handleClick() {
    ref.current = ref.current + 1;
    setClick(ref.current)
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div className=' flex justify-center mt-40'>
      <div className='btn py-2 px-8 w-20'>{Click}</div>
      <button className='btn px-5' onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}
