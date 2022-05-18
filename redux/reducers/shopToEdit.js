const initialState = {};
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "EDITED_SHOP":
        state = payload;
        return state;
      case "REMOVE_EDITED_SHOP":
        state = {};
        return state;
      default: 
        return state;
    }
};