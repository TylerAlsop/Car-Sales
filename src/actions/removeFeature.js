export const ADD_FEATURE = 'ADD_FEATURE';

const removeFeature = item => {
    console.log("removeFeature from actions", item);
    return {
      type: "REMOVE_FEATURE",
      payload: item
    };
};

export default removeFeature
  