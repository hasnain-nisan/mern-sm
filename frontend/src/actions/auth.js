import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/actionTypes";
import Cookies from "js-cookie";

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

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({
      type: AUTH,
      payload: data?.accessToken,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.logout();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};