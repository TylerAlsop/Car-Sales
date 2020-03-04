export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';



export const addFeature = item => {
    console.log("addFeature from actions", item);
    return {
      type: "ADD_FEATURE",
      payload: item
    };
};



export const removeFeature = item => {
    console.log("removeFeature from actions", item);
    return {
      type: "REMOVE_FEATURE",
      payload: item
    };
};