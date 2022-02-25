export const itemAction = {
  createList: (items) => ({
    type: "CREATE_LIST",
    payload: items,
  }),
  clearList: () => ({
    type: "CLEAR_LIST",
    payload: [],
  }),
};
