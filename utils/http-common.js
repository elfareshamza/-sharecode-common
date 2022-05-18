/* eslint-disable  */

import axios from "axios";

import { AccountService } from "@sharecode/common/services";

import { setSnackbar } from "redux/actions/snack";
import { useDispatch } from "react-redux";
import { HMD_BACKEND_API_URL, AUTH_TOKEN_KEY} from "services/constantApi";

export const HTTP = axios.create({
  baseURL: HMD_BACKEND_API_URL,
  timeout: 180000,
});

HTTP.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
    if (token != null) {
      config.headers.common.Authorization = "Token " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
HTTP.interceptors.response.use(
  (config) => config,
  (error) => {
    const res = error.response;
    if (res) if (res.status === 401) AccountService.logout();
    return Promise.reject(error);
  }
);

export const DefaultServiceHandler = (icon, color, message) => (dispatch) => {
  return dispatch(setSnackbar(true, icon, color, message));
};

export default { HTTP, DefaultServiceHandler };
