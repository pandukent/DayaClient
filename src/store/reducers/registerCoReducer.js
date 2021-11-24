function registerCoReducer(state = [], action) {
  switch (action.type) {
    case "REG_USER":
      return action.payload;
    default:
      return state;
  }
}

export default registerCoReducer;
