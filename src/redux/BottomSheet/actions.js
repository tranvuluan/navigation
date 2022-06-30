import { actionTypes } from "./actionTypes"

export const showBottomSheetModal = (dispatch, {routeName, modal}) => {
    dispatch({
        type: actionTypes.SHOW_MODAL,
        payload: {
            modal: modal,
            routeName: routeName
        }
    })
}

export const replaceBottomSheetModal = (dispatch, {routeName, modal}) => {
    dispatch({
        type: actionTypes.CLOSE_MODAL,
        payload: {
            routeName: routeName
        }
    });

    dispatch({
        type: actionTypes.SHOW_MODAL,
        payload: {
            modal: modal,
            routeName: routeName
        }
    })

};

export const closeBottomSheetModal = (dispatch, {routeName}) => {
    dispatch({
        type: actionTypes.CLOSE_MODAL,
        payload: {
            routeName: routeName
        }
    })
}

export const popBottomSheetModal = (dispatch, routeName) => {
    dispatch({
        type: actionTypes.POP_MODAL,
        payload: {
            routeName: routeName
        }
    })
}
