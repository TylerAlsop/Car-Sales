import { combineReducers } from "redux";

import { addFeatureReducer } from "./addFeatureReducer";
import { removeFeatureReducer } from "./removeFeatureReducer";
import { totalReducer } from "./totalReducer";


export const rootReducer = combineReducers({
    addFeatureReducer,
    removeFeatureReducer,
    totalReducer
});











// export const initialState = {};

// export const reducer = (state = initialState, action) => {
//     console.log("inside reducer", state, action);
//     switch (action.type) {
//       case "":
//         return {
//           ...state,
//         };
//       // NEW CASE HERE
//       case "":
//         return {
//           ...state,
//         };
//       default:
//         return state;
//     }

// };