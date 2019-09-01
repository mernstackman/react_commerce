import { combineReducers } from "redux";
import labelReducer from "./atom_reducers/label";

export default combineReducers({
  labelGap: labelReducer // Change this to rename state.labelGap.labelGap to state.otherName.labelGap
});
