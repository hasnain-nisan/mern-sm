import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({
      type: AUTH,
      payload: data?.accessToken,
    });
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};