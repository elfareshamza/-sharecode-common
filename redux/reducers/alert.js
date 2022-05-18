const initialState = {};
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "SHOW_ALERT":
        state = payload;
        return state;
      case "HIDE_ALERT":
        state = {};
        return state;
      default: 
        return state;
    }
};