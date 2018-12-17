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

export const addCard = card => ({
  type: 'ADD_CARD',
  card
});
