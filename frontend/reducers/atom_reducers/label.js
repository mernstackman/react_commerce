import { LABEL_GAP } from "frontend/actions";

const initial_state = { labelGap: 0 };

const labelReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LABEL_GAP:
      return {
        ...state,
        labelGap: action.payload
      };

    default:
      return state;
  }
};

export default labelReducer;
