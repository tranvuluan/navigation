import { ROUTE } from "../../navigation/typeRoute";
import { actionTypes } from "./actionTypes";

const initialState = {
    modals: [
        {
            routeName: ROUTE.HOME,
            stackModal: []
        }
    ]
}

const bottomSheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            console.log(action.payload.modal.isAllowClose)
            // get  modal by route name
            const modal = state.modals.find(modal => modal.routeName === action.payload.routeName) || {};
            const newStackModalPush = modal.stackModal || [];
            const modalPayload = {
                ...action.payload.modal,
                id: newStackModalPush.length + 1
            }
            newStackModalPush.push(modalPayload);
            const newModalsPush = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalPush
                    }
                }
                return modal;
            })
            return {
                modals: newModalsPush
            }

        case actionTypes.CLOSE_MODAL:
            // get  modal by route name
            console.log("CLOSE_MODAL");
            const modalReplace = state.modals.find(modal => modal.routeName === action.payload.routeName);
            let newStackModalReplace = modalReplace.stackModal;
            // newStackModalReplace.pop();
         
            const newModalsReplace = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalReplace
                    }
                }
                return modal;
            })
            return {
                modals: newModalsReplace
            }


        case actionTypes.ALLOW_CLOSE:
            console.log('ALLOW CLOSE')
            console.log(action.payload.routeName);
            const modalAllowClose = state.modals.find(modal => modal.routeName === action.payload.routeName);
            console.log(modalAllowClose);
            let newStackModalAllowClose = modalAllowClose.stackModal;
            newStackModalAllowClose[newStackModalAllowClose.length - 1].isAllowClose = true;
            const newModalsAllowClose = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalAllowClose
                    }
                }
                return modal;
            }
            )
            return {
                modals: newModalsAllowClose
            }

        case actionTypes.CLEAN_BOTTOM_SHEET_MODAL:
            let newArr3 = []
            return {
                stackModal: newArr3
            }


        default:
            return state;
    }
}

export default bottomSheetReducer;