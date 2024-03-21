import React from 'react'
import Child_C from './Child_C'
import { useContext } from 'react'
import { Object1 , Object2 } from '../../App'

const Child_B = () => {

  const data3 = useContext(Object1)
  const data4 = useContext(Object2)


  return (
    <div>
      {/* <h1>{data3} , {data4}</h1> */}
      <Child_C/>
    </div>
  );
}

export default Child_B
