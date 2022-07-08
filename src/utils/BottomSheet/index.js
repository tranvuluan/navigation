import React from 'react';
import { showBottomSheet, replaceBottomSheet, closeBottomSheet, allowCloseBottomSheet, setScreenData } from '../../redux/BottomSheet/actions';
import { viewTypes } from './viewTypes';
import { mapContentView } from './mapContentView';
import store from '../../redux/store';

const ShowBottomSheet = (routeName, contentView, data, typeOfShow, isAllowClose) => {
    const bs = {
        contentView: contentView,
        isAllowClose: isAllowClose,
        data: data,
    }

    if (typeOfShow === 'replace') {
        replaceBottomSheet(store.dispatch, {
            routeName: routeName,
            bs: bs
        });
    } else {
        showBottomSheet(store.dispatch, {
            routeName: routeName,
            bs: bs
        });
    }
}


const CloseBottomSheet = (routeName) => {
    closeBottomSheet(store.dispatch, {
        routeName: routeName
    });
}


const AllowCloseBottomSheet = (routeName) => {
    allowCloseBottomSheet(store.dispatch, {
        routeName: routeName
    });
}

const checkOpenBottomSheet = (routeName, contentView) => {
    const bsList = store.getState().bottomsheet.bsList;
    const getBS = bsList.find(bs => bs.routeName === routeName);
    if (!getBS) return false;
    const stackBS = getBS.stackBS;
    const getBottomSheet = stackBS.find(bottomSheet => bottomSheet.contentView === contentView);
    if (!getBottomSheet) return false;
    return getBottomSheet;
}

const SetScreenData = (routeName, data) => {
    // Type of data:
    // Object: { key, value }
    setScreenData(store.dispatch, {
        routeName: routeName,
        data: data
    });
}

const GetScreenData = (routeName) => {
    const bs = store.getState().bottomsheet.bsList.find(bs => bs.routeName === routeName);
    const screenData = bs?.screenData;
    if (!screenData) return null;
    return screenData;
}



export {
    ShowBottomSheet,
    CloseBottomSheet,
    AllowCloseBottomSheet,
    checkOpenBottomSheet,
    SetScreenData,
    GetScreenData,
    viewTypes,
    mapContentView
}