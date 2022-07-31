import { configureStore, combineReducers } from "@reduxjs/toolkit";
import result from "../features/result/resultSlice";

const rootReducer = combineReducers({ result });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
