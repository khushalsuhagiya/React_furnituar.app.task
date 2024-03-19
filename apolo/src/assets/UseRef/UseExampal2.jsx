import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
    <div className=' flex justify-center mt-10'>
      <h1 className='btn w-60 '>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button className='btn' onClick={handleStart}>
        Start
      </button>
      <button className='btn' onClick={handleStop}>
        Stop
      </button>
    </div>
    </>
  );
}
