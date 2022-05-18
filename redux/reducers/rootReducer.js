import { combineReducers } from "redux";
import brand from "./brand";
import auth from "./auth";
import snack from "./snack";
import shop from "./shop";
import brandToEdit from "./brandToEdit";
import shopToEdit from "./shopToEdit";
import userToEdit from "./userToEdit";
import alert from "./alert";
import user from "./user";

const rootReducer = combineReducers({
  brand,
  auth,
  snack,
  brandToEdit,
  shop,
  shopToEdit,
  alert,
  user,
  userToEdit,
});

export default rootReducer;
