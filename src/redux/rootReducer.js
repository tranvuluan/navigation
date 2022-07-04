import { combineReducers } from 'redux';
import bottomSheetReducer from './BottomSheet/reducer';
import cartReducer from './Cart/reducer';
import routeReducer from './Route/reducer';

const allReducers = combineReducers({
    bottomsheet: bottomSheetReducer,
    routeState: routeReducer,
    cart: cartReducer
});

export default allReducers;