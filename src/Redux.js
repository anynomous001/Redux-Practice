import { createStore } from "redux";


//Action Constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Define Initial States 
const initialCounter = {
    count: 0,
}


//Define Dispatch Actions

const increment = () => {
    return { type: INCREMENT };
}

const decrement = () => {
    return { type: DECREMENT };
}


//Define Reducer 

const reducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}


const store = createStore(reducer)

export { store, increment, decrement }