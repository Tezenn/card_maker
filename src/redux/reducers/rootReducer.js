import { combineReducers } from 'redux';

const defaultState = {
  myDecks: [],
  currentDeck: {}
};

const currentDeck = (state = defaultState.currentDeck, action) => {
  switch (action.type) {
    case 'ADD_NEW_DECK':
      return { ...state, ...action.deck };
    default:
      return state;
  }
};

const myDecks = (state = defaultState.myDecks, action) => state;

const rootReducer = combineReducers({ currentDeck, myDecks });
export default rootReducer;
