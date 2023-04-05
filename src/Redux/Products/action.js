import axios from "axios";
import * as types from "./actionTypes";

export const getAllProductsNavbarAPI = async () => {
  let res = await axios.get(`http://localhost:8080/collection`);
  return res.data;
};

export const getCountryFlag = async (country = "in") => {
  let res = await axios.get(`https://countryflagsapi.com/png/${country}`);
  return res.data;
};

export const handleLoading = () => {
  return { type: types.isLOADING };
};

export const handleError = () => {
  return { type: types.isERROR };
};

export const getProducts = () => async (dispatch) => {
  dispatch(handleLoading);
  await axios
    .get(`http://localhost:8080/rings`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCT, payload: res.data });
    })
    .catch((error) => {
      dispatch(handleError);
    });
};
