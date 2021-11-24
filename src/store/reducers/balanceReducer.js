function balanceReducer(state = [], action) {
    switch (action.type) {
      case "SET_BALANCE":
        return action.payload;
      default:
        return state;
    }
}

export default balanceReducer;