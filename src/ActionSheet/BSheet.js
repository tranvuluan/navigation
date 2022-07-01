import React, { useEffect, useRef } from 'react';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { mapContentView } from "../ContentView/mapContentView";
import { closeBottomSheetModal } from '../redux/BottomSheet/actions';
import { useDispatch } from 'react-redux';

const BSheet = ({ id, contentView, data, stackOfRoute, isAllowClose }) => {
    const actionSheetRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        SheetManager.show(id);
    }, []);

    const handleClose = async () => {
        closeBottomSheetModal(dispatch, {
            routeName: stackOfRoute
        });
    }

    useEffect(() => {

    }, []);

    const handleOpened = () => {
    }

    return (
        <ActionSheet ref={actionSheetRef} id={id} gestureEnabled={isAllowClose} closeOnTouchBackdrop={isAllowClose} onOpen={handleOpened} onClose={handleClose} closable={isAllowClose} closeOnPressBack={isAllowClose} >
            {mapContentView(contentView, data, stackOfRoute, actionSheetRef)}
        </ActionSheet>
    );
}

export default React.memo(BSheet);