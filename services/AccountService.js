import { HTTP } from "../utils/http-common";
import SignUp from "layouts/authentication/sign-up";
import {
  getAuthorizationToken,
  setAuthorizationToken,
  clearSession,
  URL_REGISTER,
  URL_AUTHENT,
  URL_LOGOUT,
  URL_VERIFY_EMAIL,
  URL_ACCOUNT_PROFILE,
  URL_RESET_PASSWORD,
  URL_CONFIRM_PASSWORD,
} from "./constantApi";
import { SIGN_IN } from "routes/constants";
import { IS_ADMIN, mapRole } from "@sharecode/common/redux/actions/actionTypes";
import axios from "axios";
import { IS_SOCIAL_VALUE } from "@sharecode/common/redux/actions/actionTypes";

export const postCodeSocial = (payload) => {
  return axios
    .post([URL_AUTHENT + payload.urlRedirect] + "/", payload.code)
    .then((response) => {
      console.log(JSON.stringify(response)+'postsocial');
      setAuthorizationToken(response.data.key);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem(
          "role",
          response.data.user.role ? mapRole[response.data.user.role] : IS_SOCIAL_VALUE
        );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAuthorizationSocial = (payload) => {
  return axios
    .get([URL_AUTHENT + payload+'/'])
    .then((response) => {
      console.log(response+ 'getsocial')
      if (response.data.authorisation_page) window.location.href = response.data.authorisation_page;
    })
    .catch((error) => {
      console.log(error);
    });
};

const register = (account) => {
  return new Promise((resolve, reject) => {
    HTTP.post(URL_REGISTER, account).then(function (response) {
      resolve(response);
    });
  });
};

const registerEmailValidation = (key) => {
  return new Promise((resolve, reject) => {
    HTTP.post(URL_VERIFY_EMAIL, {
      key: key,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    HTTP.post(URL_AUTHENT, {
      email: email,
      password: password,
    })
      .then(function (response) {
        setAuthorizationToken(response.data.key);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem(
          "role",
          response.data.user.role ?? mapRole[response.data.user.role]
        );
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const logout = () => {
  HTTP.get(URL_LOGOUT)
    .then((resp) => {
      clearSession();
      window.location.href = SIGN_IN;
    })
    .catch((e) => {
      clearSession();
      window.location.href = SIGN_IN;
    });
};

// const requireAuth = (to, from, next) => {
//   if (!getAuthorizationToken()) {
//     return next({
//       name: 'Sign In',
//     })
//   } else return next()
// }

const profile = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_ACCOUNT_PROFILE)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(error);
      });
  });
};

const updateProfile = (profile) => {
  return new Promise((resolve, reject) => {
    HTTP.put(URL_ACCOUNT_PROFILE, profile)
      .then((r) => {
        resolve(r);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const resetPassword = (email) => {
  return new Promise((resolve, reject) => {
    return HTTP.post(URL_RESET_PASSWORD, { email: email })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const ChangePassword = (password1, password2, uid, key) => {
  return new Promise((resolve, reject) => {
    return HTTP.post(URL_CONFIRM_PASSWORD, {
      uid: uid,
      token: key,
      new_password1: password1,
      new_password2: password2,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const AccountService = {
  login,
  register,
  registerEmailValidation,
  logout,
  profile,
  updateProfile,
  resetPassword,
  ChangePassword,
  postCodeSocial,
};
