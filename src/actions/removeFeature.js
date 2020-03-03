export const removeFeature = item => {
    console.log("removeFeature from actions", item);
    return {
      type: "REMOVE_FEATURE",
      payload: item
    };
  };
  