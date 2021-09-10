interface Card {
  id: string;
  description: string;
}

type Cards = Card[];

export interface CardState {
  cards: Cards;
  selectedId?: string;
}
interface Transaction {
  id: string;
  amount: number;
  description: string;
}

export interface Transactions {
  [id: string]: Transaction[];
}

export enum ActionType {
  SELECT_CARD = "SELECT_CARD",
  SET_CARDS = "SET_CARDS",
}

interface SelectCardAction {
  type: typeof ActionType.SELECT_CARD;
  payload: string;
}

interface SetCardsAction {
  type: typeof ActionType.SET_CARDS;
  payload: Cards[];
}

export type Action = SelectCardAction | SetCardsAction;
