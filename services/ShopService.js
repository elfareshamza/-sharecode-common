import axios from "axios";
import { getAuthorizationToken, URL_POST_SHOP } from "./constantApi";


  const getShop = (page, size, search) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${getAuthorizationToken()}` 
    }
    const index = page ? `?page=${page}` : `?page=1`;
    const element = size ? `&size=${size}` : `&size=10`;
    const searchVal = search ? `&search=${search}` : `&search=`;
    return axios.get(URL_POST_SHOP+index+element+searchVal, {
      headers: headers
    }).then(response => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const deleteShop = (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${getAuthorizationToken()}` 
    }
    return axios.delete(URL_POST_SHOP+id+'/',{
      headers: headers
    }).then(response => {
      return response
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const postShop = (data) => {
    let shop = new FormData();
    shop.append("name", data.form.values.name);
    shop.append("is_active", "true");
    shop.append("street", data.form.values.street);
    shop.append("city", data.form.values.city);
    shop.append("zipcode", data.form.values.zipcode);
    shop.append("country", data.country.toUpperCase());
    shop.append("phone_number", data.phone_number);
    shop.append("brand", data.selectedBrand);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${getAuthorizationToken()}` 
    }
    return axios.post(URL_POST_SHOP, shop, {
      headers: headers
    }).then(response => {
      return response
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const updateShop = (data) => {
    let shop = new FormData();
    shop.append("name", data.form.values.name);
    shop.append("is_active", "true");
    shop.append("street", data.form.values.street);
    shop.append("city", data.form.values.city);
    shop.append("zipcode", data.form.values.zipcode);
    shop.append("country", data.country.toUpperCase());
    shop.append("phone_number", data.phone_number);
    shop.append("brand", data.selectedBrand);
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${getAuthorizationToken()}` 
    }
    return axios.patch(URL_POST_SHOP+data.id+'/', shop, {
      headers: headers
    }).then(response => {
      return response
    })
    .catch((error) => {
      console.log(error);
    });
  };


  export const ShopService = {
    getShop,
    deleteShop,
    postShop,
    updateShop,
  };