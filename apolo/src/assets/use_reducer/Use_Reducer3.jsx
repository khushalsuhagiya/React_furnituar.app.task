import { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const Use_Reducer3 = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='btn'>{count}</div>
      <button className="btn" onClick={() => dispatch('increment')}>Increment</button>
      <button className='btn' onClick={() => dispatch('decrement')}>Decrement</button>
      <button className='btn' onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Use_Reducer3
