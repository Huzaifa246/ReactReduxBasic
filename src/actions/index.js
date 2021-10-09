export const incNumber = (/*num*/) => {
  return {
    type: "INCREMENT",
    // any property you want
    // payload : num
    // and num will be passed in the function that is in App.js and you can increment and
    // decrement by any num you write
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
