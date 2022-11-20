import { load } from "../actions.js";

const fetchTodos = async (dispatch) => {
  const res = await fetch("http://localhost:4000/todos");
  const todos = await res.json();

  dispatch(load(todos));
};

export default fetchTodos;
