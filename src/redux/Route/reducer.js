import { actionTypes } from "./actionTypes"
const initialState = {
    preRoute: null,
    currentRoute: 'Home'
}

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ROUTE:
            return {
                ...state,
                currentRoute: action.payload.currentRoute
            }
        default:
            return state;
    }
}

export default routeReducer;