import { SELECTCOLOR, SELECTSTATUS } from "./actionTypes";

export const selectStatus = (status) => {
  return {
    type: SELECTSTATUS,
    payload: status,
  };
};

export const selectColor = (color, changeType) => {
  return {
    type: SELECTCOLOR,
    payload: {
      color,
      changeType,
    },
  };
};
