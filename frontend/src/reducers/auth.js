import { AUTH, LOGOUT } from "../constants/actionTypes";
import jwt_decode from "jwt-decode";

const decodedJWT = window.localStorage.getItem('accessToken') ? jwt_decode(window.localStorage.getItem('accessToken')) : null

const authReducer = (
  authData = {
    user: decodedJWT,
    accessToken: window.localStorage.getItem("accessToken"),
  },
  action
) => {
  switch (action.type) {
    case AUTH:
      window.localStorage.setItem("accessToken", action.payload);
      return {
        ...authData,
        user: jwt_decode(action.payload),
        accessToken: action.payload,
      };
    case LOGOUT:
      window.localStorage.removeItem("accessToken");
      return {
        ...authData,
        user: null,
        accessToken: null,
      };
    default:
      return authData;
  }
};

export default authReducer;
