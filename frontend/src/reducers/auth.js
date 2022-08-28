import {
  AUTH
} from "../constants/actionTypes";
import jwt_decode from "jwt-decode";

const authReducer = (
  authData = {
    user: null,
    accessToken: null,
  },
  action
) => {
  switch (action.type) {
    case AUTH:
      return {
        ...authData,
        user: jwt_decode(action.payload),
        accessToken: action.payload,
      };
    default:
      return authData;
  }
};

export default authReducer;
