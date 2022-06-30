import { combineReducers } from 'redux';
import bottomSheetReducer from './BottomSheet/reducer';

const allReducers = combineReducers({
    bottomsheet: bottomSheetReducer
});

export default allReducers;