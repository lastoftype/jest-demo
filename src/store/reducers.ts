import { customerReducer } from "./customer/reducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  customer: customerReducer
});
