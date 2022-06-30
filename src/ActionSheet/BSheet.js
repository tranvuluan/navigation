import React, { useEffect } from 'react';
import ActionSheet, { SheetManager, SheetProps, registerSheet } from "react-native-actions-sheet";
import { mapContentView } from "../ContentView/mapContentView";
import { closeBottomSheetModal } from '../redux/BottomSheet/actions';
import {useDispatch, useSelector} from 'react-redux';

const BSheet = ({id, contentView, data, stackOfRoute}) => {
    const dispatch = useDispatch();
    // connect isAllowClose to store
    const isAllowClose = useSelector(state => state.bottomsheet.modals.find(modal => modal.routeName === stackOfRoute).stackModal.pop().isAllowClose);
    console.log('isAllowClose: ', isAllowClose);


    useEffect(() => {
        console.log('id: ', id);
        SheetManager.show(id);
    }, []);

    const handleClose = async () => {
        // await SheetManager.hide(id);
        closeBottomSheetModal(dispatch, {
            routeName: stackOfRoute
        });
    }

    useEffect(() => {
        // fetching data
        fetch('http://')
        let timeout = setTimeout(() => {
            handleClose();
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <ActionSheet id={id} onClose={handleClose} closable={isAllowClose} >
            {mapContentView(contentView, data)}
        </ActionSheet>
    );
}

export default React.memo(BSheet);