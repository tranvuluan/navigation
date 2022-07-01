import { actionTypes } from "./actionTypes";

export const changeRoute = (dispatch, { currentRoute}) => {
    dispatch({
        type: actionTypes.CHANGE_ROUTE,
        payload: {
            currentRoute: currentRoute
        }
    });
}