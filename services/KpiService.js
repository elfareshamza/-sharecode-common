import { HTTP } from "../utils/http-common";

import { URL_GET_KPI_DASHBOARD } from "./constantApi";
import { URL_GET_KPI_CLIENTXP } from "./constantApi";
import { URL_GET_KPI_CLIENTLIST } from "./constantApi";

const getKpiDashboard = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_KPI_DASHBOARD)
      .then((r) => {
        resolve(r.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getKpiClientXp = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_KPI_CLIENTXP)
      .then((r) => {
        resolve(r.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getKpiClientList = () => {
  return new Promise((resolve, reject) => {
    HTTP.get(URL_GET_KPI_CLIENTLIST)
      .then((r) => {
        resolve(r.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const KpiService = {
  getKpiDashboard,
  getKpiClientXp,
  getKpiClientList,
};
