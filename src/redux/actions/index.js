export const addNewDeck = deck => ({
  type: 'ADD_NEW_DECK',
  deck
});

export const editCard = card => ({
  type: 'EDIT_CARD',
  card
});

export const editAllCards = options => ({
  type: 'EDIT_ALL_CARDS',
  options
});

export const addImportedDeck = deck => ({
  type: 'ADD_IMPORTED_DECK',
  deck
});

export const addCard = card => ({
  type: 'ADD_CARD',
  card
});

export const removeDeck = deck => ({
  type: 'REMOVE_DECK',
  deck
});
