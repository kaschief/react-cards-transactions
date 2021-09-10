import { CardsState, ActionType, Action } from "../../../types";

const initialState: CardsState = {
  cards: [],
  selectedId: "",
};

const reducer = (state: CardsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT_CARD:
      return {
        ...state,
        selectedId: action.payload,
      };
    case ActionType.SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
