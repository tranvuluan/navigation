import { actionTypes } from "./actionTypes"

export const showBottomSheet = (dispatch, { routeName, bs }) => {
    setTimeout(() => {
        dispatch({
            type: actionTypes.SHOW_BS,
            payload: {
                bs: { ...bs },
                routeName: routeName
            }
        })
    }, 0);
}

export const replaceBottomSheet = (dispatch, { routeName, bs }) => {
    dispatch({
        type: actionTypes.CLOSE_BS,
        payload: {
            routeName: routeName
        }
    });
    setTimeout(() => {
        dispatch({
            type: actionTypes.SHOW_BS,
            payload: {
                bs: { ...bs },
                routeName: routeName
            }
        });
    }, 0);


};

export const closeBottomSheet = (dispatch, { routeName }) => {
    dispatch({
        type: actionTypes.CLOSE_BS,
        payload: {
            routeName: routeName
        }
    })
}

export const allowCloseBottomSheet = (dispatch, { routeName }) => {
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