import { actionTypes } from "./actionTypes"

export const showBottomSheetModal = (dispatch, { routeName, modal }) => {
    setTimeout(() => {
        dispatch({
            type: actionTypes.SHOW_MODAL,
            payload: {
                modal: { ...modal },
                routeName: routeName
            }
        })
    }, 0);
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
                modal: { ...modal },
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

export const storeScreenData = (dispatch, { routeName, data }) => {
    dispatch({
        type: actionTypes.STORE_SCREEN_DATA,
        payload: {
            routeName: routeName,
            data: data
        }
    })
}