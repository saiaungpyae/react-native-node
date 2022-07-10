import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import camera from "./camera";
import snackbar from "./snackbar";

const reducer = combineReducers({
  camera,
  snackbar,
});

const store = configureStore({
  reducer,
});

export type TypedReducer = {
  camera: any;
  snackbar: any;
};

export default store;
