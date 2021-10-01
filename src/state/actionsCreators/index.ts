import { Action, ActionType, Cards, Transactions } from "../../types.d";

export const setCards = (cards: Cards): Action => ({
  type: ActionType.SET_CARDS,
  payload: cards,
});

export const selectCard = (id: string): Action => ({
  type: ActionType.SELECT_CARD,
  payload: id,
});

export const setTransactions = (transactions: Transactions): Action => ({
  type: ActionType.SET_TRANSACTIONS,
  payload: transactions,
});

export const setActiveTransactionsId = (id: string): Action => ({
  type: ActionType.SET_ACTIVE_TRANSACTIONS_ID,
  payload: id,
});
export const getFilteredTransactions = (): Action => ({
  type: ActionType.GET_FILTERED_TRANSACTIONS,
});

export const setIsFiltered = (filtered: boolean): Action => ({
  type: ActionType.SET_IS_FILTERED,
  payload: filtered,
});

export const setFilterTerm = (filterTerm: string): Action => ({
  type: ActionType.SET_FILTER_TERM,
  payload: filterTerm,
});
