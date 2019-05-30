import * as Types from "./actionTypes";
import { Reducer } from "redux";

export interface State {
  id: string | null;
}

export const INITIAL_STATE: State = {
  id: null
};

export const customerReducer: Reducer = (
  state: State = INITIAL_STATE,
  action: any
): State => {
  switch (action.type) {
    case Types.SET_CUSTOMER_ID_SUCCESS:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
