import React from 'react';
import { showBottomSheetModal, replaceBottomSheetModal, closeBottomSheetModal, allowCloseBottomSheetModal } from '../../redux/BottomSheet/actions';
import { viewTypes } from './ModalViews/viewTypes';
import { mapContentView } from './ModalViews/mapContentView';
import store from '../../redux/store';



const ShowBottomSheet = (routeName, contentView, isAllowClose, data) => {
    const modal = {
        contentView: contentView,
        isAllowClose: isAllowClose,
        data: data,
    }
    showBottomSheetModal(store.dispatch, {
        routeName: routeName,
        modal: modal
    });
}

const ReplaceButtomSheet = (routeName, contentView, isAllowClose, data) => {
    const modal = {
        contentView: contentView,
        isAllowClose: isAllowClose,
        data: data
    }

    replaceBottomSheetModal(storedispatch, {
        routeName: routeName,
        modal: modal
    });
};

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
    ReplaceButtomSheet,
    CloseBottomSheet,
    AllowCloseBottomSheet,
    viewTypes,
    mapContentView
}