import { useReducer} from "react"

const initialState = 0;

const reducer = (state , action) =>{
     console.log(state , action);
     if(action.type === "INCREMENT"){
          return state + 1
     }
     if(action.type === "DECREMENT"){
          return state - 1
     }
     return state
}

const Use_Reducer2 = () => {

     // const [count , setCount] = useState(0)

     const [state , dispatch] = useReducer(reducer , initialState)

     const Increment = () =>{
          dispatch({type : "INCREMENT"})
     }

     const Decrement = () =>{
          dispatch({type : "DECREMENT"})
     }

  return (
    <div>
      <span className="btn">{state}</span>
      <button className="btn" onClick={Increment}>+</button>
      <button className="btn" onClick={Decrement}>-</button>
    </div>
  )
}

export default Use_Reducer2
