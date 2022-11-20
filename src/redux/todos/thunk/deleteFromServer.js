import { deleteTodo } from "../actions.js";

const deleteFromServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:4000/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleteTodo(todoId));
  };
};

export default deleteFromServer;
