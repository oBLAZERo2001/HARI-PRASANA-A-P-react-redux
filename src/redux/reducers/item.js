export const ItemReducers = (state = [], action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return action.payload;
    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
};
