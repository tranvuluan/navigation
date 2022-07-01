import React from 'react';
import { showBottomSheetModal, replaceBottomSheetModal, closeBottomSheetModal, allowCloseBottomSheetModal } from '../../redux/BottomSheet/actions';
import { viewTypes } from './viewTypes';
import { mapContentView } from './mapContentView';
import store from '../../redux/store';



const ShowBottomSheet = (routeName, contentView, isAllowClose, data, typeOfShow) => {
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

export {
    ShowBottomSheet,
    CloseBottomSheet,
    AllowCloseBottomSheet,
    viewTypes,
    mapContentView
}