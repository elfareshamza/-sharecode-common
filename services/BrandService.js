import axios from "axios";
import { getAuthorizationToken, URL_POST_BRAND } from "./constantApi";


const postBrand = (form) => {
  let brand = new FormData();
  brand.append("name", form.values.name);
  brand.append("logo", form.values.logo, form.values.logo.name);
 
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  return axios.post(URL_POST_BRAND, brand, {
    headers: headers
  }).then(response => {
    return response
  })
  .catch((error) => {
    console.log(error);
  });
};

const updateBrand = (form) => {
  let brand = new FormData();
  brand.append("name", form.form.values.name);
  if (form.form.values.logo)
  brand.append("logo", form.form.values.logo, form.form.values.logo.name);
 
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  return axios.patch(URL_POST_BRAND+form.id+'/', brand, {
    headers: headers
  }).then(response => {
    return response
  })
  .catch((error) => {
    console.log(error);
  });
};


const deleteBrand = (id) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  return axios.delete(URL_POST_BRAND+id+'/',{
    headers: headers
  }).then(response => {
    return response;
  })
  .catch((error) => {
    console.log(error);
  });
};

const getBrand = (page, size, search) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${getAuthorizationToken()}` 
  }
  const index = page ? `?page=${page}` : `?page=1`;
  const element = size ? `&size=${size}` : `&size=10`;
  const searchVal = search ? `&search=${search}` : `&search=`;
  return axios.get(URL_POST_BRAND+index+element+searchVal, {
    headers: headers
  }).then(response => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
};

export const BrandService = {
    postBrand,
    getBrand,
    deleteBrand,
    updateBrand,
  };

  