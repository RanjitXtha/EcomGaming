export const sortReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE_LOWEST':
      return state.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); //slice makes different copy so original wont be modified
    case 'SORT_BY_PRICE_HIGHEST':
      return state.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case 'SORT_BY_NAME_A_TO_Z':
      return state.slice().sort((a, b) => a.name.localeCompare(b.name));
    case 'SORT_BY_NAME_Z_TO_A':
      return state.slice().sort((a, b) => b.name.localeCompare(a.name));
    default:
      return state;
  }
};
