import { tickToggle } from "../actions.js";

const tickUpdateToServer = (todoId, currentStatus) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(tickToggle(todo.id));
  };
};

export default tickUpdateToServer;
