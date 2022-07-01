import { actionTypes } from "./actionTypes"


const initialState = {
    preRoute: null,
    currentRoute: 'Home'
}

const routeReducer = (state = initialState, action) => {
    switch (actionTypes.type) {
        case actionTypes.SET_PRE_ROUTE:
    }
}

export default routeReducer;