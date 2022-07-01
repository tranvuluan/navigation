import { combineReducers } from 'redux';
import bottomSheetReducer from './BottomSheet/reducer';
import routeReducer from './Route/reducer';

const allReducers = combineReducers({
    bottomsheet: bottomSheetReducer,
    routeState: routeReducer
});

export default allReducers;