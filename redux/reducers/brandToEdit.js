const initialState = {};
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "EDITED_BRAND":
        state = payload;
        return state;
      case "REMOVE_EDITED_BRAND":
        state = payload;
        return state;
      default: 
        return state;
    }
};