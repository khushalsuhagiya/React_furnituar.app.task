import React from 'react'
import Child_D from './Child_D'
import { useContext } from 'react'
import { Object1 , Object2 } from '../../App'

const Child_C = () => {

  const data3 = useContext(Object1)
  const data4 = useContext(Object2)


  return (
    <div>
      {/* <h1>{data3} , {data4}</h1> */}
      <Child_D/>
    </div>
  )
}

export default Child_C