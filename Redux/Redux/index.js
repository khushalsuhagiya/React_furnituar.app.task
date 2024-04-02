const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKES = 'BUY_CAKES';
const BUY_SODA = 'BUY_SODA';

function buy_cakes() {
    return {
        type: BUY_CAKES,
        info: 'first redux action'
    }
}

function buy_soda() {
    return {
        type: BUY_SODA,
        info: 'second redux action'
    }
}



const initialState = {
    numOfCakes: 10,
    numOfSoda: 10,
}
console.log(initialState);




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKES:
            if (state.numOfCakes >= 1) {
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                }
            }
            else {
                return ('empty store')
            }



        case BUY_SODA:
            if (state.numOfSoda >= 1) {
                return {
                    ...state,
                    numOfSoda: state.numOfSoda - 1
                }
            }
            else {
                return ('empty store')
            }

        default: return state
    }
}




console.log(initialState)

const store = createStore(reducer)

store.subscribe(() => console.log('Updated State', store.getState()))



store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())


store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
store.dispatch(buy_soda())
