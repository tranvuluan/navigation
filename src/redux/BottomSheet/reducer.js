import { ROUTE } from "../../navigation/typeRoute";
import { actionTypes } from "./actionTypes";

const initialState = {
    modals: [
        {
            routeName: ROUTE.HOME,
            stackModal: [],
            screenData: []
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
                            stackModal: newStackModal,
                            screenData: modal.screenData
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
                newModals = [...newModals, { routeName: action.payload.routeName, stackModal: newStackModal, screenData: [] }];
            }

            return {
                modals: newModals
            }


        case actionTypes.CLOSE_MODAL:
            // get  modal by route name
            let modalReplace = state.modals.find(modal => modal.routeName === action.payload.routeName);
            console.log(modalReplace);
            let newStackModalReplace = modalReplace.stackModal;
            newStackModalReplace.pop();
            if (newStackModalReplace.length === 0) {
                let modals = state.modals.filter(modal => modal.routeName !== action.payload.routeName);
                return {
                    modals: modals
                }
            }
            const newModalsReplace = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalReplace,
                        screenData: modal.screenData
                    }
                }
                return modal;
            })
            return {
                modals: newModalsReplace
            }


        case actionTypes.ALLOW_CLOSE:
            const modalAllowClose = state.modals.find(modal => modal.routeName === action.payload.routeName);
            let newStackModalAllowClose = modalAllowClose.stackModal;
            newStackModalAllowClose[newStackModalAllowClose.length - 1].isAllowClose = true;
            const newModalsAllowClose = state.modals.map(modal => {
                if (modal.routeName === action.payload.routeName) {
                    modal = {
                        routeName: action.payload.routeName,
                        stackModal: newStackModalAllowClose,
                        screenData: modal.screenData
                    }
                }
                return modal;
            }
            )
            return {
                modals: newModalsAllowClose
            }


        case actionTypes.STORE_SCREEN_DATA:
            const getModal = state.modals.find(modal => modal.routeName === action.payload.routeName);
            if (getModal) {
                const newScreenData = getModal.screenData;
                // check unique key of Object (key, value);
                const checkUniqueKey = newScreenData.find(screenData => screenData.key === action.payload.data.key);
                if (checkUniqueKey) {
                    newScreenData.map(screenData => {
                        if (screenData.key === action.payload.data.key) {
                            screenData = {
                                ...screenData,
                                value: action.payload.data.value
                            }
                        }
                        return screenData;
                    }
                    )
                } else {
                    newScreenData.push(action.payload.data);
                }
                const newModalsStoreScreenData = state.modals.map(modal => {
                    if (modal.routeName === action.payload.routeName) {
                        modal = {
                            routeName: action.payload.routeName,
                            stackModal: modal.stackModal,
                            screenData: newScreenData
                        }
                    }
                    return modal;
                }
                )
                return {
                    modals: newModalsStoreScreenData
                }
            } else {
                const newModalsStore = [...state.modals, { routeName: action.payload.routeName, screenData: action.payload.data }];
                return {
                    modals: newModalsStore
                }
            }

        default:
            return state;
    }
}

export default bottomSheetReducer;