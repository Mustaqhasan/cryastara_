import * as types from "./actionTypes";

const intialstate = {
  isLoading: false,
  isError: false,
  product: [],
};

export const productReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.isLOADING:
      return { ...state, isLoading: true };

    case types.isERROR:
      return { ...state, isLoading: false, isError: true };

    case types.GET_PRODUCT:
      return { ...state, isLoading: false, product: action.payload };

    default:
      return state;
  }
};
