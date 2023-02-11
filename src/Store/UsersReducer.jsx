const Reducer = (state, action) => {
    switch(action.type){
        case"CLOSE_LOADER": return {...state, Loading: action.payload}
        break;
        case"SET_USERS": return {...state, users: action.payload}
        break;
        default:
            return state;
    }
}
export default Reducer;