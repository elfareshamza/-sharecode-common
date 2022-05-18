const initialState = [{
}];
  
export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "GET_USER":
        return payload;
        break;
      case "POST_USER":
        return payload;
        break;
      default: 
        return state;
    }
};
  