import { selectColour } from "../actions.js";

const saveColorToServer = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(selectColour(todo.id, todo.color));
  };
};

export default saveColorToServer;
