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
    case ActionType.SET_ACTIVE_TRANSACTIONS_ID: {
      const isValidID = Object.prototype.hasOwnProperty.call(
        state.customerTransactions,
        action.payload
      );
      return {
        ...state,
        activeTransactionsID: isValidID
          ? action.payload
          : state.activeTransactionsID,
      };
    }
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
    case ActionType.GET_FILTERED_TRANSACTIONS: {
      const {
        isFiltered,
        customerTransactions,
        activeTransactionsID,
        filterTerm,
      } = state;

      const filteredTransactions = isFiltered
        ? customerTransactions[activeTransactionsID].filter((t) => {
            const description = t.description.toLowerCase();
            const amount = t.amount.toString();
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
    }
    default:
      return state;
  }
};

export default reducer;
