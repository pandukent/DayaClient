function CommunityOfficerReducer(state = [], action) {
  switch (action.type) {
    case "SET_CommunityOfficer":
      return action.payload;
    default:
      return state;
  }
}

export default CommunityOfficerReducer;
