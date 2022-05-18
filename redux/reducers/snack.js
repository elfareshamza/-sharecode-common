import * as types from "../actions/actionTypes";

const initialState = {
  snackbarOpen: false,
  snackbarIcon: "error",
  snackbarType: "success",
  snackbarMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarIcon, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarIcon,
        snackbarType,
        snackbarMessage,
      };
    default:
      return state;
  }
};
