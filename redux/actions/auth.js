/* eslint-disable */
import * as types from "./actionTypes";

import { AccountService } from "services";

export const register = (first_name, last_name, email, password1, password2) => (dispatch) => {
  return AccountService.register(first_name, last_name, email, password1, password2).then(
    () => {
      dispatch({
        type: types.REGISTER_SUCCESS,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: types.REGISTER_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const updateProfile = (profile) => (dispatch) => {
  return AccountService.updateProfile(profile).then(
    (response) => {
      dispatch({
        type: types.UPDATE_PROFILE,
        payload: { user: response },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AccountService.login(email, password).then(
    (response) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { user: response.data.user },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: types.LOGIN_FAIL,
      });
      return Promise.reject(error);
    }
  );
};

export const postCodeSocial = (payload) => (dispatch) => {
  return AccountService.postCodeSocial(payload).then(
    (response) => {
      dispatch({
        type: types.SOCIAL_SUCCESS,
        payload: { user: response.data.user },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: types.LOGIN_FAIL,
      });
      return Promise.reject(error);
    }
  );
};

export const linkedinSignIn = () => (dispatch) => {
  // TODO ACCOUNTSERVICE LOGIN WITH LINKEDIN CALL REQUEST
};

export const logout = () => (dispatch) => {
  AccountService.logout();
  dispatch({
    type: types.LOGOUT,
  });
};
