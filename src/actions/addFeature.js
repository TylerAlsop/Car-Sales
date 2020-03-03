export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = item => {
    console.log("addFeature from actions", item);
    return {
      type: "ADD_FEATURE",
      payload: item
    };
};
  
export default addFeature
