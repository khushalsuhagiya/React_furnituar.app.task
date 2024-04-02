import { createStore } from "redux" 

function Todos(state = [], action) {
    switch (action.type) {
        case 'PUT_TODO': return state.concat([action.text])
        default: state
    }
}

const store = createStore(Todos, ["Use Redux"])

store.dispatch({
    type: 'PUT_TODO',
    text: 'This is Redux Logic'
    
})

console.log(store.getState());