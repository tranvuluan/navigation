import React from 'react';
import { showBottomSheetModal, replaceBottomSheetModal, closeBottomSheetModal, allowCloseBottomSheetModal, storeScreenData } from '../../redux/BottomSheet/actions';
import { viewTypes } from './viewTypes';
import { mapContentView } from './mapContentView';
import store from '../../redux/store';

const ShowBottomSheet = (routeName, contentView, data, typeOfShow, isAllowClose) => {
    const modal = {
        contentView: contentView,
        isAllowClose: isAllowClose,
        data: data,
    }

    if (typeOfShow === 'replace') {
        replaceBottomSheetModal(store.dispatch, {
            routeName: routeName,
            modal: modal
        });
    } else {
        showBottomSheetModal(store.dispatch, {
            routeName: routeName,
            modal: modal
        });
    }
}


const CloseBottomSheet = (routeName) => {
    closeBottomSheetModal(store.dispatch, {
        routeName: routeName
    });
}


const AllowCloseBottomSheet = (routeName) => {
    allowCloseBottomSheetModal(store.dispatch, {
        routeName: routeName
    });
}

const checkOpenBottomSheet = (routeName, contentView) => {
    const modals = store.getState().bottomsheet.modals;
    const getModal = modals.find(modal => modal.routeName === routeName);
    if (!getModal) return false;
    const stackModal = getModal.stackModal;
    const getBottomSheet = stackModal.find(bottomSheet => bottomSheet.contentView === contentView);
    if (!getBottomSheet) return false;
    return getBottomSheet;
}

const StoreScreenData = (routeName, data) => {
    // Type of data:
    // Object: { key, value }
    storeScreenData(store.dispatch, {
        routeName: routeName,
        data: data
    });
}


export {
    ShowBottomSheet,
    CloseBottomSheet,
    AllowCloseBottomSheet,
    checkOpenBottomSheet,
    StoreScreenData,
    viewTypes,
    mapContentView
}