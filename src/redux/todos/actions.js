import {
  LOAD,
  ADD,
  TICKTOGGLE,
  SELECTCOLOUR,
  DELETE,
  SELECTALL,
  CLEARSELECTEDS,
} from "./actionTypes";

export const load = (todos) => {
  return {
    type: LOAD,
    payload: todos,
  };
};
export const add = (text) => {
  return {
    type: ADD,
    payload: text,
  };
};

export const tickToggle = (todoId) => {
  return {
    type: TICKTOGGLE,
    payload: todoId,
  };
};

export const selectColour = (todoId, color) => {
  return {
    type: SELECTCOLOUR,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};

export const selectall = () => {
  return {
    type: SELECTALL,
  };
};

export const clearSelections = () => {
  return {
    type: CLEARSELECTEDS,
  };
};
