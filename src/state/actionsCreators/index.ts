import { Dispatch } from "redux";
import { Action, ActionType, Cards, Transactions } from "../../types.d";

export const setCards = (cards: Cards) => (dispatch: Dispatch<Action>) => {
  return dispatch({
    type: ActionType.SET_CARDS,
    payload: cards,
  });
};

export const selectCard = (id: string) => (dispatch: Dispatch<Action>) => {
  return dispatch({
    type: ActionType.SELECT_CARD,
    payload: id,
  });
};

export const setTransactions =
  (transactions: Transactions) => (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.SET_TRANSACTIONS,
      payload: transactions,
    });
  };

export const setActiveTransactionsId =
  (id: string) => (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.SET_ACTIVE_TRANSACTIONS_ID,
      payload: id,
    });
  };
export const getFilteredTransactions = () => (dispatch: Dispatch<Action>) => {
  return dispatch({
    type: ActionType.GET_FILTERED_TRANSACTIONS,
  });
};

export const setIsFiltered =
  (filtered: boolean) => (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.SET_IS_FILTERED,
      payload: filtered,
    });
  };

export const setFilterTerm =
  (filterTerm: string) => (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.SET_FILTER_TERM,
      payload: filterTerm,
    });
  };
