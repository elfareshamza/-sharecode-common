import * as types from "./actionTypes";

export const setSnackbar = (
  snackbarOpen,
  snackbarIcon = "error",
  snackbarType = "error",
  snackbarMessage = ""
) => ({
  type: types.SET_SNACKBAR,
  snackbarOpen,
  snackbarIcon,
  snackbarType,
  snackbarMessage,
});
