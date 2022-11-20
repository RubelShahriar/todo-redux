import { add } from "../actions.js";

const addToServer = (title) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(add(todo.title));
  };
};

export default addToServer;
