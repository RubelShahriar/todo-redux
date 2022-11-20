import initialState from "./initiialState";
import {
  ADD,
  TICKTOGGLE,
  SELECTCOLOUR,
  DELETE,
  SELECTALL,
  CLEARSELECTEDS,
  LOAD,
} from "./actionTypes";

const newTodoId = (todos) => {
  const maxId = todos.reduce((result, todo) => Math.max(todo.id, result), 0);
  console.log(maxId);

  return maxId + 1;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return action.payload;

    case ADD:
      return [
        ...state,
        {
          id: newTodoId(state),
          title: action.payload,
          completed: false,
        },
      ];

    case TICKTOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case SELECTCOLOUR:
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case SELECTALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARSELECTEDS:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
