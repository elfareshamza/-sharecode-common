import { CHARTS } from "mocks";

import {
  URL_GET_USER_PER_WEEK,
  URL_GET_ETICKETS_PER_WEEK,
  URL_GET_ACTIVITY_PER_AREA,
  URL_GET_CLIENT_FIDELITY,
  URL_GET_FEMALE_MALE_CHART,
  URL_GET_PRO_PERSO_CHART,
  URL_GET_ETICKETS_SCAN_CHART,
} from "./constantApi";
import { HTTP } from "../utils/http-common";
const getCharts = () => {
  return new Promise((resolve, reject) => {
    resolve(CHARTS);
  });
};

const getActivityPerArea = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_ACTIVITY_PER_AREA)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getNbEticketsPerWeeks = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_USER_PER_WEEK)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getNbUserPerWeeks = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_ETICKETS_PER_WEEK)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getClientFidelity = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_CLIENT_FIDELITY)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getFemaleMaleChart = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_FEMALE_MALE_CHART)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getProPersoChart = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_PRO_PERSO_CHART)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getEticketScanChart = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_ETICKETS_SCAN_CHART)
      .then((r) => {
        resolve(r.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const ChartService = {
  getCharts,
  getActivityPerArea,
  getNbEticketsPerWeeks,
  getNbUserPerWeeks,
  getClientFidelity,
  getFemaleMaleChart,
  getProPersoChart,
  getEticketScanChart,
};
