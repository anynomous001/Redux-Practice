import { nanoid } from "nanoid";
import { createStore } from "redux";


//Action Constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADDPRODUCTS = 'ADDPRODUCTS'
const DELETE_PRODUCTS = 'DELETE_PRODUCTS'

//Define Initial States 
const initialCounter = {
    count: 0,
    products: [
        { id: 1, name: 'pen' },
        { id: 2, name: 'pencil' },
        { id: 3, name: 'book' },
    ],

}


//Define Dispatch Actions

const increment = () => {
    return { type: INCREMENT };
}

const decrement = () => {
    return { type: DECREMENT };
}


const addProducts = (product) => {
    const newProduct = {
        id: nanoid(),
        name: product,
    }

    return {
        type: ADDPRODUCTS,
        payload: newProduct,
    }
}
const deleteProducts = (productId) => {

    return {
        type: DELETE_PRODUCTS,
        payload: productId,
    }
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
        case ADDPRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
}


//creating Store

const store = createStore(reducer)


// Exporting All Dispatch Actions
export { store, increment, decrement, addProducts, deleteProducts }