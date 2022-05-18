const initialState = [{
}];
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "GET_SHOP":
        return payload;
        break;
      case "POST_SHOP":
        return state;
        break;
      case "UPDATE_SHOP":
        return state
        break;
      case "DELETE_SHOP":
        return state;
        break;
      default: 
        return state;
    }
};
  