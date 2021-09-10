export interface Card {
  id: string;
  description: string;
}

export type Cards = Card[];

export interface CardsState {
  customerCards: Cards;
  selectedId?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
}

export interface Transactions {
  [id: string]: Transaction[];
}

export interface TransactionsState {
  customerTransactions: Transactions;
  activeTransactionsID: string;
  filteredTransactions: Transaction[];
  isFiltered: boolean;
  filterTerm: string;
}

export enum ActionType {
  SELECT_CARD = "SELECT_CARD",
  SET_CARDS = "SET_CARDS",
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_ACTIVE_TRANSACTIONS_ID = "SET_ACTIVE_TRANSACTIONS_ID",
  SET_FILTER_TERM = "SET_FILTER_TERM",
  SET_IS_FILTERED = "SET_IS_FILTERED",
  GET_FILTERED_TRANSACTIONS = "GET_FILTERED_TRANSACTIONS",
}

interface SelectCardAction {
  type: typeof ActionType.SELECT_CARD;
  payload: string;
}

interface SetCardsAction {
  type: typeof ActionType.SET_CARDS;
  payload: Cards;
}

interface SetTransactionsAction {
  type: typeof ActionType.SET_TRANSACTIONS;
  payload: Transactions;
}

interface SetActiveTransactionsIdAction {
  type: typeof ActionType.SET_ACTIVE_TRANSACTIONS_ID;
  payload: string;
}

interface GetFilteredTransactionsAction {
  type: typeof ActionType.GET_FILTERED_TRANSACTIONS;
}
interface SetIsFilteredAction {
  type: typeof ActionType.SET_IS_FILTERED;
  payload: boolean;
}

interface SetFilterTermAction {
  type: typeof ActionType.SET_FILTER_TERM;
  payload: string;
}

export type Action =
  | SelectCardAction
  | SetCardsAction
  | SetTransactionsAction
  | SetActiveTransactionsIdAction
  | SetFilterTermAction
  | SetIsFilteredAction
  | GetFilteredTransactionsAction;

export interface CardProps {
  card: Card;
}

export interface TransactionProps {
  transaction: Transaction;
}
