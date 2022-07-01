import React, { useEffect, useRef } from 'react';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { CloseBottomSheet, mapContentView } from '../../utils/BottomSheet';

const BSheet = ({ id, contentView, data, stackOfRoute, isAllowClose }) => {
    const actionSheetRef = useRef();
    useEffect(() => {
        SheetManager.show(id);
    }, []);

    const handleClose = async () => {
        CloseBottomSheet(stackOfRoute);
    }

    const handleOpened = () => {
        
    }

    return (
        <ActionSheet ref={actionSheetRef} id={id} gestureEnabled={isAllowClose} closeOnTouchBackdrop={isAllowClose} onOpen={handleOpened} onClose={handleClose} closable={isAllowClose} closeOnPressBack={isAllowClose} >
            {mapContentView(contentView, data, stackOfRoute, actionSheetRef)}
        </ActionSheet>
    );
}

export default React.memo(BSheet);