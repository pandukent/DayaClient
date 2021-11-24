function dataRequest(state = [], action) {
  switch (action.type) {
    case "data_request":
      return action.payload;
    default:
      return state;
  }
}

export default dataRequest;
