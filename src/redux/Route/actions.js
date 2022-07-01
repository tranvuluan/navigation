export const changeRoute = (dispatch, {preRoute, currentRoute}) => {
    dispatch({
        type: actionTypes.CHANGE_ROUTE,
        payload: {
            preRoute: preRoute,
            currentRoute: currentRoute
        }
    });
}