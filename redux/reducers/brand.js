const initialState = [{
  id: '',
  name: '',
  logo: ''
}];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_BRAND":
      return payload ? payload : state;
      break;
    case "POST_BRAND":
      return state;
      break;
    case "UPDATE_BRAND":
      return state;
      break;
    case "DELETE_BRAND":
      return state;
      break;
    default:
      return state;
  }
};


