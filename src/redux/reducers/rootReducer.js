import { combineReducers } from 'redux';

const defaultState = {
  myDecks: [],
  currentDeck: {}
};

const currentDeck = (state = defaultState.currentDeck, action) => {
  switch (action.type) {
    case 'ADD_NEW_DECK':
      return { ...state, ...action.deck };

    case 'EDIT_CARD':
      const index = Number(action.card.card_number);
      return {
        ...state,
        cards: state.cards.map((el, i) =>
          i === index ? (el = action.card) : el
        )
      };

    default:
      return state;
  }
};

const myDecks = (state = defaultState.myDecks, action) => state;

const rootReducer = combineReducers({ currentDeck, myDecks });
export default rootReducer;
