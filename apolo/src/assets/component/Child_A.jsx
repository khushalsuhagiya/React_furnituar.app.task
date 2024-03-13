import React from 'react'
import Child_B from './Child_B'
import { Object3 } from '../../App'
import { useContext } from 'react'

const Child_A = () => {

  const names  = useContext(Object3)
  const prices = useContext(Object3)
  const colors = useContext(Object3)

  return (
    <div>
      {/* <div>
        <h1>Item IS {names.name}</h1>
        <p>Item Price Is {prices.price}</p>
        <p>Item Color IS {colors.color}</p>
      </div> */}
      <Child_B/>
    </div>
  );
}

export default Child_A
