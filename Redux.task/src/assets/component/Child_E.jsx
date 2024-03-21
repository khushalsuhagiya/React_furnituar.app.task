import React,{useContext} from 'react'
import { Object4 } from '../../App'
import Child_F from './Child_F'

const Child_E = () => {

  const data3 = useContext(Object4)

  return (
    <>
    {/* <div className=' bg-red-500 mt-5'>
      name: {data3[1].name}<br></br>
      price: {data3[1].price}<br></br>
      color: {data3[1].color}
    </div> */}
    <Child_F/>
    </>
  )
}

export default Child_E