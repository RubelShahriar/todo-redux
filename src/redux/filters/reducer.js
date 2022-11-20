import { SELECTSTATUS, SELECTCOLOR } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTSTATUS:
      return {
        ...state,
        status: action.payload,
      };

    case SELECTCOLOR:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingcolor) => existingcolor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
