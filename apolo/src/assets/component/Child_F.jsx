import React,{useContext} from 'react'
import { Object4 } from '../../App'
import Child_G from './Child_G'

const Child_D = () => {

  const data3 = useContext(Object4)

  return (
    <>
    {/* <div className=' bg-blue-500 mt-5'>
      name: {data3[2].name}<br></br>
      price: {data3[2].price}<br></br>
      color: {data3[2].color}
    </div> */}
    <Child_G/>
    </>
  )
}

export default Child_D