import axios from "axios";
import { useRole } from "routes/ProtectedRoutes";
import { getAuthorizationToken, URL_POST_USER } from "./constantApi";
import { getUserInfos } from "./constantApi";

const getUser = (page, size, search) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  const index = page ? `?page=${page}` : `?page=1`;
  const element = size ? `&size=${size}` : `&size=10`;
  const searchVal = search ? `&search=${search}` : `&search=`;
  return axios.get(URL_POST_USER+index+element+searchVal, {
    headers: headers
  }).then(response => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
};

const postUser = (data) => {
  const authUser = getUserInfos();
  const user = JSON.stringify({
    "email": data.form.values.email,
    "username": data.form.values.email,
    "first_name": data.form.values.first_name,
    "last_name": data.form.values.last_name,
    "role": data.selectedRole,
    "shops": data.selectedShops,
    "brand": data.selectedBrand,
    "is_active": "true"
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }

  return axios.post(URL_POST_USER, user, {
    headers: headers
  }).then(response => {
    return response
  })
  .catch((error) => {
    console.log(error);
  });
};

const updateUser = (data) => {
  const authUser = getUserInfos();
  const user = JSON.stringify({
    "role": data.selectedRole,
    "shops": data.selectedShops,
    "brand": data.selectedBrand
  });
 
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  return axios.patch(URL_POST_USER+data.id+'/', user, {
    headers: headers
  }).then(response => {
    return response
  })
  .catch((error) => {
    console.log(error);
  });
};

export const UserService = {
    getUser,
    postUser,
    updateUser,
  };

  