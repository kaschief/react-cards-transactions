import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import transactionsReducer from "./transactionsReducer";

const reducers = combineReducers({
  cards: cardsReducer,
  transactions: transactionsReducer,
});

export default reducers;
