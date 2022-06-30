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
            // get  modal by route name
            const modal = state.modals.find(modal => modal.routeName === action.payload.routeName) || {};
            const newStackModalPush = modal.stackModal || [];
            const modalPayload = {
                ...action.payload.modal,
                id: action.payload.modal.id
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
            const modalReplace = state.modals.find(modal => modal.routeName === action.payload.routeName);
            let newStackModalReplace = modalReplace.stackModal;
            newStackModalReplace.pop();
         
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

        case actionTypes.POP_MODAL:
            console.log('POP')
            const modalProp = state.modals.find(modal => modal.routeName === action.payload.routeName);
            console.log(modalProp);
            let newStackModalPop = modalProp.stackModal;
            if (newStackModalPop.length > 1) {
                newStackModalPop.splice(newStackModalPop.length - 2, 1);
                console.log('new stack modal pop: ', newStackModalPop);
            } else {
                newStackModalPop.pop();
            }
            const newModalsPop = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalPop
                    }
                }
                return modal;
            })
            return {
                modals: newModalsPop
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