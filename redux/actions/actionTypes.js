// Authentication
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SOCIAL_SUCCESS = "SOCIAL_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

// Snackbars
export const SET_SNACKBAR = "SET_SNACKBAR";

// Users
export const IS_ADMIN = "admin";
export const IS_MANAGER_BRAND = "brand_manager";
export const IS_MANAGER_SHOP = "shop_manager";
export const IS_EMPLOYEE_BRAND = "brand_employee";
export const IS_EMPLOYEE_SHOP = "shop_employee";

export const IS_ADMIN_VALUE = "admin";
export const IS_MANAGER_BRAND_VALUE = "brand_manager";
export const IS_MANAGER_SHOP_VALUE = "shop_manager";
export const IS_EMPLOYEE_BRAND_VALUE = "brand_employee";
export const IS_EMPLOYEE_SHOP_VALUE = "shop_employee";
export const IS_SOCIAL_VALUE = "social";

export const IS_ADMIN_LABEL = "admin";
export const IS_MANAGER_BRAND_LABEL = "Manager Brand";
export const IS_MANAGER_SHOP_LABEL = "Manager PDV";
export const IS_EMPLOYEE_BRAND_LABEL = "Employé Brand";
export const IS_EMPLOYEE_SHOP_LABEL = "Employé PDV";
export const IS_SOCIAL_LABEL = "Social";

export const mapRole = {IS_ADMIN_VALUE: IS_ADMIN_LABEL, IS_MANAGER_BRAND_VALUE: IS_MANAGER_BRAND_LABEL, IS_MANAGER_SHOP_VALUE: IS_MANAGER_SHOP_LABEL, IS_EMPLOYEE_BRAND_VALUE: IS_EMPLOYEE_BRAND_LABEL, IS_EMPLOYEE_SHOP_VALUE: IS_EMPLOYEE_SHOP_LABEL, IS_SOCIAL_VALUE: IS_SOCIAL_LABEL };



export const listRole = [
    { label: IS_ADMIN_LABEL, value: "admin"},
    { label: IS_MANAGER_BRAND_LABEL, value: "brand_manager"},
    { label: IS_MANAGER_SHOP_LABEL, value: "shop_manager"},
    { label: IS_EMPLOYEE_BRAND_LABEL, value: "brand_employee"},
    { label: IS_EMPLOYEE_SHOP_LABEL, value: "shop_employee"},
];

export const listForAdmin = [
    { label: IS_ADMIN_LABEL, value: "admin"},
    { label: IS_MANAGER_BRAND_LABEL, value: "brand_manager"},
];

export const listForBrandManager = [
    { label: IS_MANAGER_SHOP_LABEL, value: "shop_manager"},
    { label: IS_EMPLOYEE_BRAND_LABEL, value: "brand_employee"},
    { label: IS_MANAGER_BRAND_LABEL, value: "brand_manager"},
];

export const listForShopManager = [
    { label: IS_EMPLOYEE_SHOP_LABEL, value: "shop_employee"},
    { label: IS_MANAGER_SHOP_LABEL, value: "shop_manager"},
];

//Brand
export const POST_BRAND = "POST_BRAND";
export const GET_BRAND = "GET_BRAND";
export const DELETE_BRAND = "DELETE_BRAND";
export const UPDATE_BRAND = "UPDATE_BRAND";
export const EDITED_BRAND = "EDITED_BRAND";
export const REMOVE_EDITED_BRAND = "REMOVE_EDITED_BRAND";

//Shop
export const GET_SHOP = "GET_SHOP";
export const POST_SHOP = "POST_SHOP";
export const DELETE_SHOP = "DELETE_SHOP";
export const EDITED_SHOP = "EDITED_SHOP";
export const UPDATE_SHOP = "UPDATE_SHOP";
export const REMOVE_EDITED_SHOP = "REMOVE_EDITED_SHOP";
// Status

//Users
export const GET_USER = "GET_USER";
export const POST_USER = "POST_USER";
export const EDITED_USER = "EDITED_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_EDITED_USER = "REMOVE_EDITED_USER";
//Alert
export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";

export const IS_ACTIVE = "IS_ACTIVE";
