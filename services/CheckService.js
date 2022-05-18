import { HTTP } from "../utils/http-common";
import { TABLEDATA } from "mocks";

import { URL_GET_LIST_COMMENTS } from "./constantApi";

const get = () => {
  return new Promise((resolve, reject) => {
    resolve(TABLEDATA);
  });
};

const getListReviews = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_LIST_COMMENTS)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(error);
      });
  });
};

export const CheckService = { get, getListReviews };
