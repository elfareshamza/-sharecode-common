import * as types from "./actionTypes";

import { ShopService } from "services/ShopService";
import { SHOP_LIST } from "routes/constants";

export const getShop = (page, size, search) => (dispatch) => {
  return ShopService.getShop(page, size, search).then(
    (response) => {
      dispatch({
        type: types.GET_SHOP,
        payload: response,
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const deleteShop = (payload) => (dispatch) => {
    return ShopService.deleteShop(payload).then(
      (response) => {
        dispatch({
          type: types.DELETE_SHOP,
          payload: { deleted: payload },
        });
        return Promise.resolve();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
};

export const postShop = (payload) => (dispatch) => {
    return ShopService.postShop(payload).then(
      (response) => {
        dispatch({
          type: types.POST_SHOP,
          payload: { newState : response.data },
        });
        return Promise.resolve();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
};

export const updateShop = (payload) => (dispatch) => {
    return ShopService.updateShop(payload).then(
      (response) => {
        dispatch({
          type: types.UPDATE_SHOP,
          payload: { newState : response.data },
        });
        return Promise.resolve();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };