function detailCoReducer(state = [], action) {
  switch (action.type) {
    case "data_Co":
      return action.payload;
    default:
      return state;
  }
}

export default detailCoReducer;
