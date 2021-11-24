function detailCoReducerObject(state = {}, action) {
  switch (action.type) {
    case "data_CommunityOfficerObject":
      return action.payload;
    default:
      return state;
  }
}

export default detailCoReducerObject;
