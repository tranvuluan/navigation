import { ROUTE } from "../../navigation/typeRoute";
import { actionTypes } from "./actionTypes";
import { SheetManager } from "react-native-actions-sheet";

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
            const modal = state.modals.find(modal => modal.routeName === action.payload.routeName);
            let newModals = [...state.modals];
            let newStackModal = [];
            if (modal) {
                newStackModal = modal.stackModal;
                const modalPayload = {
                    ...action.payload.modal,
                    id: newStackModal.length + 1
                }
                newStackModal.push(modalPayload);
                newModals = state.modals.map(modal => {
                    if (modal.routeName === action.payload.routeName) {
                        modal = {
                            routeName: action.payload.routeName,
                            stackModal: newStackModal
                        }
                    }
                    return modal;
                })
            } else {
                const modalPayload = {
                    ...action.payload.modal,
                    id: 1
                }
                newStackModal.push(modalPayload); 
                newModals = [...newModals, { routeName: action.payload.routeName, stackModal: newStackModal }];
            }
            
            return {
                modals: newModals
            }

 
        case actionTypes.CLOSE_MODAL:
            // get  modal by route name
            console.log("CLOSE_MODAL");
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

        default:
            return state;
    }
}

export default bottomSheetReducer;