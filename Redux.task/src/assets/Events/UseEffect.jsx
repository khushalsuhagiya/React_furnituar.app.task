import React from 'react'
import { useEffect , useState } from 'react'


export let Use_Effect = () => {

  let[state , setState] = useState(0)
  let[data , setData] = useState(0)

  const handleClick1 = () =>{
    setState(state+1)
  }

  useEffect(()=>{setData(data+1)},[state])


  return (
    <div>
      <span className='btn'>{state}</span>
      <button className='btn' onClick={handleClick1}>click</button>
      <span className='btn'>{data}</span>
    </div>
  )
}

 export const Use_Effect_2 = ({names}) => {
    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings page ${names}`;
    });
  
    return <div>{message}</div>;
}

export const Use_Effect_3 = ({names}) => {
    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings to ${names}`; 
    }, [names]);
  
    return <div>{message}</div>;
}

export const Use_Effect_4 = ({message}) => {
    useEffect(() => {
        setInterval(() => {
          console.log(message);
        }, 2000);
      }, [message]);
    
      return <div>I'm logging to console "{message}"</div>;
}

export const Use_Effect_5 = () => {
    useEffect(() => {
        const id = setInterval(() => {
          console.log(message);
        }, 2000);
        return () => {
          clearInterval(id);
        };
      }, [message]);
    
      return <div>I'm logging to console "{message}"</div>;
}
