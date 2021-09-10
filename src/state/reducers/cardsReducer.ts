import { Cards, CardState, ActionType } from "../../../types";

const initialState: CardState = {
    cards: [],
    selectedId: "",
  };
  
  const reducer = (state: CardState = initialState, action: Action) => {
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
  
      © 2021 GitHub, Inc.
      Terms
      Privacy
      Security
      Status
  