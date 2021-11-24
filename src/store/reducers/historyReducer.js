function historyReducer(state = [], action) {
    switch (action.type) {
        case "SET_History":
            return action.payload;
        default:
            return state;
    }
}

export default historyReducer;