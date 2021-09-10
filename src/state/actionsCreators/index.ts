import { Dispatch } from "redux";
import { Action, ActionType, Cards } from "../../../types";

export const setCards = (cards: Cards[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_CARDS,
      payload: cards,
    });
  };
};

export const selectCard = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SELECT_CARD,
      payload: id,
    });
  };
};
