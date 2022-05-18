const initialState = {};
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "EDITED_USER":
        state = payload;
        return state;
      case "REMOVE_EDITED_USER":
        state = {};
        return state;
      default: 
        return state;
    }
};