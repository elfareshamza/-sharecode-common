import * as types from "../actions/actionTypes";
import { mapRole, IS_ADMIN } from "../actions/actionTypes";
import { getAuthorizationToken } from "services/constantApi";
import { getUserPicture } from "routes/ProtectedRoutes";

const user = getAuthorizationToken;
const picture = getUserPicture();
const initialState = user ? { isLoggedIn: true, user, role: null, picture: picture } : { isLoggedIn: false, user: null, role: null, picture: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: '',
        role: payload.user.role ?? mapRole[payload.user.brand.role],
        picture: payload.user.picture ?? payload.user.picture,
      };
    case types.SOCIAL_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: '',
        role: payload.user.role ?? mapRole[payload.user.brand.role],
        picture: payload.user.picture ?? payload.user.picture,
      };
    case types.UPDATE_PROFILE:
      let user = localStorage.getItem('user');
      user = JSON.parse(user);
      user.user.picture = payload.user.data.picture ?? payload.user.data.picture;
      localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        isLoggedIn: true,
        picture: payload.user.data.picture ?? payload.user.data.picture,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

