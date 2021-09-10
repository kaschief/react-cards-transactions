import { TransactionsState, ActionType, Action } from "../../types.d";

const initialState: TransactionsState = {
  customerTransactions: {},
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
        customerTransactions: action.payload,
      };
    case ActionType.SET_ACTIVE_TRANSACTIONS_ID:
      let isValidID = state.customerTransactions.hasOwnProperty(action.payload);
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
      let {
        isFiltered,
        customerTransactions,
        activeTransactionsID,
        filterTerm,
      } = state;

      let filteredTransactions = isFiltered
        ? customerTransactions[activeTransactionsID].filter((t) => {
            let description = t.description.toLowerCase();
            let amount = t.amount.toString();
            return (
              description.includes(filterTerm.toLowerCase()) ||
              amount.includes(filterTerm.toLowerCase())
            );
          })
        : customerTransactions[activeTransactionsID];
      return {
        ...state,
        filteredTransactions,
      };
    default:
      return state;
  }
};

export default reducer;
