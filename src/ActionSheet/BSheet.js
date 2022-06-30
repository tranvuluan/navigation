import React, { useEffect } from 'react';
import ActionSheet, { SheetManager, SheetProps, registerSheet } from "react-native-actions-sheet";
import { mapContentView } from "../ContentView/mapContentView";
import { closeBottomSheetModal } from '../redux/BottomSheet/actions';
import {useDispatch} from 'react-redux';

const BSheet = ({id, contentView, data, stackOfRoute}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        SheetManager.show(id);
    }, []);

    const handleClose = async () => {
        // await SheetManager.hide(id);
        closeBottomSheetModal(dispatch, {
            routeName: stackOfRoute
        });
    }

    return (
        <ActionSheet id={id} onClose={handleClose}  >
            {mapContentView(contentView, data)}
        </ActionSheet>
    );
}

export default React.memo(BSheet);