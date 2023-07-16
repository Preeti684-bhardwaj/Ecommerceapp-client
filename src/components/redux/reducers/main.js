import { getProductsReducer } from "./Productreducers";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducer
});

export default rootreducers;