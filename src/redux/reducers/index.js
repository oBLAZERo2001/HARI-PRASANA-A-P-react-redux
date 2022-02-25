import { combineReducers } from "redux";
import { ItemReducers } from "./item";

const rootReducers = combineReducers({
  itemsList: ItemReducers,
});

export default rootReducers;
