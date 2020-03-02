export const initialState = {};

export const reducer = (state = initialState, action) => {
    console.log("inside reducer", state, action);
    switch (action.type) {
      case "":
        return {
          ...state,
        };
      // NEW CASE HERE
      case "":
        return {
          ...state,
        };
      default:
        return state;
    }

};