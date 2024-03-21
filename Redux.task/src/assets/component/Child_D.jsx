import React,{useContext} from 'react'
import { Object4 } from '../../App'
import Child_E from './child_E'

const Child_D = () => {

  const data3 = useContext(Object4)

  return (
    <>
    {/* <div className=' bg-green-500'>
      name: {data3[0].name}<br></br>
      price: {data3[0].price}<br></br>
      color: {data3[0].color}
    </div> */}
      <Child_E/>
    </>
  )
}

export default Child_D


