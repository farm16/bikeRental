import { combineReducers } from 'redux';
import checkoutData from './checkout';
import productsData from './products';

export default combineReducers({ checkoutData, productsData });
