import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("cartItems") || null;

const initialState = { cart: {cartItems}, userSignin: { userInfo}};
const reducer = combineReducers ({
    productList: productListReducer,
    productDetails: productDetailsReducer, 
    cart: cartReducer,
    userSignin: userSigninReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;