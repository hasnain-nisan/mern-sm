import { logout } from "../actions/auth";
import { toast } from "react-toastify";

export function isTokenVerified({ dispatch, getState }) {
  return (next) => (action) => {
    let state = getState();
    let user = state.authData.user;

    if (user) {
        let valid = checkToken(user?.exp);
        if (!valid) {
          dispatch(logout());
          toast.error("User token has expired, please log in again.");
        }
    }

    // Call the next dispatch method in the middleware chain.
    return next(action);
  };
}

const checkToken = (exp) => {
  if (Date.now() >= exp * 1000) {
    return false;
  }
  return true;
};
