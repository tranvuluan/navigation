import { actionTypes } from "./actionTypes"

export const showBottomSheetModal = (dispatch, { routeName, modal }) => {
    dispatch({
        type: actionTypes.SHOW_MODAL,
        payload: {
            modal: {...modal},
            routeName: routeName
        }
    })
}

export const replaceBottomSheetModal = (dispatch, { routeName, modal }) => {
    dispatch({
        type: actionTypes.CLOSE_MODAL,
        payload: {
            routeName: routeName
        }
    });
    setTimeout(() => {
        dispatch({
            type: actionTypes.SHOW_MODAL,
            payload: {
                modal: {...modal},
                routeName: routeName
            }
        });
    }, 0);


};

export const closeBottomSheetModal = (dispatch, { routeName }) => {
    dispatch({
        type: actionTypes.CLOSE_MODAL,
        payload: {
            routeName: routeName
        }
    })
}

export const allowCloseBottomSheetModal = (dispatch, { routeName }) => {
    dispatch({
        type: actionTypes.ALLOW_CLOSE,
        payload: {
            routeName: routeName
        }
    })
}; 