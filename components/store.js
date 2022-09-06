import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import photoReducer from "./photoReducer"
/**
 * redux store 
 */
export const storeRedux= createStore(photoReducer,applyMiddleware(thunk))
