import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducer';

const initialState = {};
const reducer = combineReducers ({
    productList: productListReducer,
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;