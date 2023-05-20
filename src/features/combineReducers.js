import { combineReducers } from "@reduxjs/toolkit";
import dataSet from "./data";
import portfolio1 from '../portfolio1/frontend/src/data/jw_data'
const rootReducer = combineReducers({
    dataSet,
    portfolio1
})

export default rootReducer;