import React, { useEffect, useLayoutEffect } from 'react';
import ActionSheet, { SheetManager, SheetProps, registerSheet } from "react-native-actions-sheet";
import { mapContentView } from "../ContentView/mapContentView";
import { closeBottomSheetModal } from '../redux/BottomSheet/actions';
import { useDispatch, useSelector } from 'react-redux';

const BSheet = ({ id, contentView, data, stackOfRoute, isAllowClose, replace }) => {
    const actionSheetRef = React.createRef();
    const dispatch = useDispatch();
    // connect isAllowClose to store

    useEffect(() => {
        if (replace)
            SheetManager.hide(id - 1)
        SheetManager.show(id);
    }, []);

    const handleClose = async () => {
        closeBottomSheetModal(dispatch, {
            routeName: stackOfRoute
        });
    }

    // useEffect(() => {
    //     actionSheetRef.current?.hide();
    // }, []);

    useEffect(() => {
        // fetching data
        // fetch('http://18.218.101.141:5000/api/v1/category')
        // .then(response => response.json())
        // .then(data => {
        //     // handleClose();
        //     actionSheetRef.current?.hide()
        // });

    }, []);

    const handleOpened = () => {
        // fetch('http://18.218.101.141:5000/api/v1/category')
        //     .then(response => response.json())
        //     .then(data => {
        //         handleClose();
        //     });
    }

    return (
        <ActionSheet ref={actionSheetRef} id={id} gestureEnabled={true} onOpen={handleOpened} onClose={handleClose} closable={true} closeOnPressBack={isAllowClose} >
            {mapContentView(contentView, data, stackOfRoute)}
        </ActionSheet>
    );
}

export default React.memo(BSheet);