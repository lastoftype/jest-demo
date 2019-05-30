import * as Types from "./actionTypes";

export const setCustomerId = (id: string) => ({
  id,
  type: Types.SET_CUSTOMER_ID
});
