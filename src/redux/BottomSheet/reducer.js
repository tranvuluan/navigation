import { ROUTE } from "../../navigation/typeRoute";
import { actionTypes } from "./actionTypes";

const initialState = {
    bsList: [
        {
            routeName: ROUTE.HOME,
            stackBS: [],
            screenData: {}
        }
    ]
}

const bottomSheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_BS:
            // get  modal by route name
            const BS = state.bsList.find(bs => bs.routeName === action.payload.routeName);
            let newBsList = [...state.bsList];
            let newStackBS = [];
            if (BS) {
                newStackBS = BS.stackBS;
                const bsPayload = {
                    ...action.payload.bs,
                    id: newStackBS.length + 1
                }
                newStackBS.push(bsPayload);
                newBsList = state.bsList.map(bs => {
                    if (bs.routeName === action.payload.routeName) {
                        bs = {
                            routeName: action.payload.routeName,
                            stackBS: newStackBS,
                            screenData: bs.screenData
                        }
                    }
                    return bs;
                })
            } else {
                const bsPayload = {
                    ...action.payload.bs,
                    id: 1
                }
                newStackBS.push(bsPayload);
                newBsList = [...newBsList, { routeName: action.payload.routeName, stackBS: newStackBS, screenData: {} }];
            }

            return {
                bsList: newBsList
            }


        case actionTypes.CLOSE_BS:
            // get  modal by route name
            let bsReplace = state.bsList.find(bs => bs.routeName === action.payload.routeName);
            if (!bsReplace) {
                return state;
            }
            let newStackBSReplace = bsReplace.stackBS;
            newStackBSReplace.pop();
            if (newStackBSReplace.length === 0) {
                let bs = state.bsList.filter(bs => bs.routeName !== action.payload.routeName);
                return {
                    bsList: bs
                }
            }
            const newBSReplace = state.bsList.map(bs => {
                if (bs.routeName === action.payload.routeName) {
                    bs = {
                        routeName: action.payload.routeName,
                        stackBS: newStackBSReplace,
                        screenData: bs.screenData
                    }
                }
                return bs;
            })
            return {
                bsList: newBSReplace
            }


        case actionTypes.ALLOW_CLOSE:
            const bsAllowClose = state.bsList.find(bs => bs.routeName === action.payload.routeName);
            let newStackBSAllowClose = bsAllowClose.stackBS;
            newStackBSAllowClose[newStackBSAllowClose.length - 1].isAllowClose = true;
            const newBsListAllowClose = state.bsList.map(bs => {
                if (bs.routeName === action.payload.routeName) {
                    bs = {
                        routeName: action.payload.routeName,
                        stackBS: newStackBSAllowClose,
                        screenData: bs.screenData
                    }
                }
                return bs;
            }
            )
            return {
                bsList: newBsListAllowClose
            }


        case actionTypes.SET_SCREEN_DATA:
            const getBS = state.bsList.find(bs => bs.routeName === action.payload.routeName);
            const {data } = action.payload;
            let newScreenData = {};
            if (getBS) {
                 newScreenData = getBS.screenData;
                newScreenData = Object.assign({}, newScreenData, data);
                const newBsListStoreScreenData = state.bsList.map(bs => {
                    if (bs.routeName === action.payload.routeName) {
                        bs = {
                            routeName: action.payload.routeName,
                            stackBS: bs.stackBS,
                            screenData: newScreenData
                        }
                    }
                    return bs;
                })
                return {
                    bsList: newBsListStoreScreenData
                }
            } else {
                newScreenData = Object.assign({}, data);
                const newBSListStore = [...state.bsList, { routeName: action.payload.routeName, stackBS: [], screenData: newScreenData }];
                return {
                    bsList: newBSListStore
                }
            }

        default:
            return state;
    }
}

export default bottomSheetReducer;