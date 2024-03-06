import React from 'react'
import { useState } from 'react'
import {Photos} from './output'

const State_components = () => {



  const [data  , setData] = useState(0)

  function  handleClick(){
    if (data >= 19) {
        setData(data - 19)
    }
    else{
        setData(data + 1)
    }
  }

  function  handleClick1(){
    if(data <= 0){
        setData(data + 19)
    }
    else{
        setData(data - 1)
    }
  }

  let picturesList = Photos[data]

  return (
    <div className='h-96 w-96'>
      <button className='btn' onClick={handleClick} >Next</button>
      <button className='btn' onClick={handleClick1} >Previous</button>
      <div>
        <h1>{picturesList.title}</h1>
        <img src={picturesList.url} alt="" />
        <h3> ({data + 1} of {Photos.length})</h3>
        <p>{picturesList.description}</p>
      </div>
    </div>
  )
}

export default State_components