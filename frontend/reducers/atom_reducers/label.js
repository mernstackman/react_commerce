import { LABEL_GAP } from "frontend/actions";

const initial_state = 0;

const labelReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LABEL_GAP:
      return action.payload;

    default:
      return state;
  }
};

export default labelReducer;
