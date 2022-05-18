import { stringify } from "stylis";
import { IS_ADMIN_VALUE }  from "@sharecode/common/redux/actions/actionTypes";
export const HMD_BACKEND_API_URL = process.env.REACT_APP_ROOT_API;

export const AUTH_TOKEN_KEY = "token";

// Backend URLs

//Account
export const URL_AUTHENT = HMD_BACKEND_API_URL + "/accounts/login/";
export const URL_REGISTER = HMD_BACKEND_API_URL + "/accounts/register/";
export const URL_LOGOUT = HMD_BACKEND_API_URL + "/accounts/logout/";
export const URL_VERIFY_EMAIL = HMD_BACKEND_API_URL + "/accounts/register/verify-email/";
export const URL_ACCOUNT_PROFILE = HMD_BACKEND_API_URL + "/accounts/profile/";
export const URL_RESET_PASSWORD = HMD_BACKEND_API_URL + "/accounts/password/reset/";
export const URL_CONFIRM_PASSWORD = HMD_BACKEND_API_URL + "/accounts/password/reset/confirm/";
export const URL_AUTHENT_LINKEDIN = HMD_BACKEND_API_URL + "/accounts/login/linkedin/";
export const URL_AUTHENT_GOOGLE = HMD_BACKEND_API_URL + "/accounts/login/google/";

//Brand
export const URL_POST_BRAND = HMD_BACKEND_API_URL + "/brands/";

//Shop
export const URL_POST_SHOP = HMD_BACKEND_API_URL + "/brands/shops/";

//User
export const URL_POST_USER = HMD_BACKEND_API_URL + "/users/";

// KPI
export const URL_GET_KPI_DASHBOARD = HMD_BACKEND_API_URL + "/stats/dashboard/";
export const URL_GET_KPI_CLIENTXP = HMD_BACKEND_API_URL + "/stats/client-xp/";
export const URL_GET_KPI_CLIENTLIST = HMD_BACKEND_API_URL + "/stats/clients/";

export const URL_GET_USER_PER_WEEK = HMD_BACKEND_API_URL + "/stats/user-per-week/";
export const URL_GET_ETICKETS_PER_WEEK = HMD_BACKEND_API_URL + "/stats/etickets-per-weeks/";
export const URL_GET_ACTIVITY_PER_AREA = HMD_BACKEND_API_URL + "/stats/activity-area/";

export const URL_GET_CLIENT_FIDELITY = HMD_BACKEND_API_URL + "/stats/client-fid/";
export const URL_GET_FEMALE_MALE_CHART = HMD_BACKEND_API_URL + "/stats/chart-female-male/";

export const URL_GET_PRO_PERSO_CHART = HMD_BACKEND_API_URL + "/stats/pro-perso/";

export const URL_GET_ETICKETS_SCAN_CHART = HMD_BACKEND_API_URL + "/stats/e-ticket-scan/";

// Comments
export const URL_GET_LIST_COMMENTS = HMD_BACKEND_API_URL + "/comments/";

//Get Auth Token
export const getAuthorizationToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const getUserInfos = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user).user;
  return user;
};

export const getUserBrand = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user).user;
  if (user.role !== IS_ADMIN_VALUE)
    return user.brand.id;
  else 
  return null;
};

export const setAuthorizationToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const clearSession = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem("user");
  localStorage.removeItem("role");
};
