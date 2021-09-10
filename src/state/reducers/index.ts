import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import transactionsReducer from "./transactionsReducer";

const reducers = combineReducers({
  customerCards: cardsReducer,
  customerTransactions: transactionsReducer,
});

export default reducers;
