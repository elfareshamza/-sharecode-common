/* eslint-disable */

import * as types from "./actionTypes";

import { UserService } from "services/UserService";


export const getUser = (page, size, search) => (dispatch) => {
  return UserService.getUser(page, size, search).then(
    (response) => {
      dispatch({
        type: types.GET_USER,
        payload: response,
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};


export const postUser = (payload) => (dispatch) => {
  return UserService.postUser(payload).then(
    (response) => {
      dispatch({
        type: types.POST_USER,
        payload: { newState : response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};


export const updateUser = (payload) => (dispatch) => {
  return UserService.updateUser(payload).then(
    (response) => {
      dispatch({
        type: types.UPDATE_USER,
        payload: { newState : response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

