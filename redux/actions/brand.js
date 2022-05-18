/* eslint-disable */

import * as types from "./actionTypes";

import { BrandService } from "services/BrandService";


export const getBrand = (page, size, search) => (dispatch) => {
  return BrandService.getBrand(page, size, search).then(
    (response) => {
      dispatch({
        type: types.GET_BRAND,
        payload: response,
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const postBrand = (payload) => (dispatch) => {
  return BrandService.postBrand(payload).then(
    (response) => {
      dispatch({
        type: types.POST_BRAND,
        payload: { newState : response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const updateBrand = (payload) => (dispatch) => {
  return BrandService.updateBrand(payload).then(
    (response) => {
      dispatch({
        type: types.UPDATE_BRAND,
        payload: { newState : response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const deleteBrand = (payload) => (dispatch) => {
  return BrandService.deleteBrand(payload).then(
    (response) => {
      dispatch({
        type: types.DELETE_BRAND,
        payload: { deleted: payload },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

