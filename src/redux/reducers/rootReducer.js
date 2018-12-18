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

    case 'EDIT_ALL_CARDS':
      return {
        ...state,
        cards: state.cards.map(
          el => (el = { ...el, options: { ...action.options } })
        )
      };

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.card] };

    default:
      return state;
  }
};

const myDecks = (state = defaultState.myDecks, action) => {
  switch (action.type) {
    case 'ADD_IMPORTED_DECK':
      const existing = el => el.name === action.deck.name;
      if (state.findIndex(existing) > -1) {
        const newState = [...state];
        newState[state.findIndex(existing)] = action.deck;
        return newState;
      } else {
        return [...state, action.deck];
      }

    case 'REMOVE_DECK':
      const findDeck = el => el.name === action.deck.name;
      if (state.findIndex(findDeck) > -1) {
        const index = state.findIndex(findDeck);
        const newState = [...state];
        newState.splice(index, 1);
        return newState;
      } else {
        return [...state, action.deck];
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ currentDeck, myDecks });
export default rootReducer;
