import { TransactionsState, ActionType, Action } from "../../../types";

const initialState: TransactionsState = {
  transactions: {},
  activeTransactionsID: "",
  filteredTransactions: {},
  isFiltered: false,
  filterTerm: "",
};

const reducer = (state: TransactionsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TRANSACTIONS:
      return {
        ...state,
        trsnsactions: action.payload,
      };
    case ActionType.SET_ACTIVE_TRANSACTIONS_ID:
      return {
        ...state,
        activeTransactionsID: action.payload,
      };
    case ActionType.SET_FILTER_TERM:
      return {
        ...state,
        filterTerm: action.payload,
      };
    case ActionType.SET_IS_FILTERED:
      return {
        ...state,
        isFiltered: state.filterTerm.length !== 0,
      };
    case ActionType.GET_FILTERED_TRANSACTIONS:
      const { isFiltered, transactions, activeTransactionsID, filterTerm } =
        state;

      const filteredTransactions = isFiltered
        ? transactions[activeTransactionsID].filter((t) =>
            t.description.includes(filterTerm)
          )
        : state.transactions;
      return {
        ...state,
        filteredTransactions,
      };
    default:
      return state;
  }
};

export default reducer;
