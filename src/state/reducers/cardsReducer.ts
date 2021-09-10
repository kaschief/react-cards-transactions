import { CardsState, ActionType, Action } from "../../types.d";

const initialState: CardsState = {
  cards: [],
  selectedId: "",
};

const reducer = (
  state: CardsState = initialState,
  action: Action
): CardsState => {
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
