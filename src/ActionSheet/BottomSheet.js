import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BSheet from './BSheet';
import { getCurrentRouteName } from '../../App';

const BottomSheet = (navigationRef) => {
    const dispatch = useDispatch();
    const routeName = getCurrentRouteName();
    console.log(routeName);
    const bottomsheet = useSelector(state => state.bottomsheet); 
    console.log('BottomSheet: ', bottomsheet);
    const modals = bottomsheet.modals; 
    const modal = modals.find(modal => modal.routeName === 'Home');
    const stackModal = modal ? modal.stackModal : null
    console.log('-------------Stack ---------');
    console.log(stackModal);


    return (
        <>
            {stackModal && stackModal.map((bs, index) => <BSheet key={index} id={bs.id} stackOfRoute={modal.routeName}  contentView={bs.contentView} data={bs.data} />)}
        </>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});



