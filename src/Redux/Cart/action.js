import * as types from "./actionTypes";
import axios from "axios";

export const TotalpriceFound = (payload) => {
  return {
    type: types.TotalPrice,
    payload,
  };
};
export const subTotalFound = (payload) => {
  return {
    type: types.SubTotalFound,
    payload,
  };
};

export const TotalsavingFound = (payload) => {
  return {
    type: types.TotalSaving,
    payload,
  };
};
export const TotalItemFound = (payload) => {
  return {
    type: types.TotalItem,
    payload,
  };
};
export const GetCart = (payload) => {
  return {
    type: types.Get,
    payload,
  };
};

export const Deldata = () => {
  return {
    type: types.DEL_CART,
  };
};

export const GetPin = (payload) => {
  return {
    type: types.Pin,
    payload,
  };
};
export const Getwish = (payload) => {
  return {
    type: types.wishlist,
    payload,
  };
};

export const getProductsCart = () => async (dispatch) => {
  //   dispatch(handleLoading);
  await axios
    .get(`http://localhost:8080/cart`)
    .then((res) => {
      dispatch({ type: types.Get, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addItemToCart = (data) => async (dispatch) => {
  await axios.post(`http://localhost:8080/cart`, data).then((res) => {
    dispatch({ type: types.addItem, payload: res.data });
  });
};

export const deleteCartItem = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
    dispatch({ type: types.DEL_CART, payload: res.data });
  });
};
