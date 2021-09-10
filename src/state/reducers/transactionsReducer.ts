import { TransactionsState, ActionType, Action } from "../../types.d";

const initialState: TransactionsState = {
  transactions: {},
  activeTransactionsID: "",
  filteredTransactions: [],
  isFiltered: false,
  filterTerm: "",
};

const reducer = (
  state: TransactionsState = initialState,
  action: Action
): TransactionsState => {
  switch (action.type) {
    case ActionType.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionType.SET_ACTIVE_TRANSACTIONS_ID:
      let isValidID = state.transactions.hasOwnProperty(action.payload);
      return {
        ...state,
        activeTransactionsID: isValidID
          ? action.payload
          : state.activeTransactionsID,
      };
    case ActionType.SET_FILTER_TERM:
      return {
        ...state,
        filterTerm: action.payload,
      };
    case ActionType.SET_IS_FILTERED:
      return {
        ...state,
        isFiltered: action.payload,
      };
    case ActionType.GET_FILTERED_TRANSACTIONS:
      let { isFiltered, transactions, activeTransactionsID, filterTerm } =
        state;

      let filteredTransactions = isFiltered
        ? transactions[activeTransactionsID].filter((t) => {
            let description = t.description.toLowerCase();
            return description.includes(filterTerm.toLowerCase());
          })
        : transactions[activeTransactionsID];
      return {
        ...state,
        filteredTransactions,
      };
    default:
      return state;
  }
};

export default reducer;
