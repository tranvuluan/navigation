import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BSheet from './BSheet';

const BottomSheet = () => {
    const bottomsheet = useSelector(state => state.bottomsheet);
    console.log('BottomSheet: ', bottomsheet);
    const modals = bottomsheet.modals;
    const currentRoute = useSelector(state => state.routeState.currentRoute);
    const modal = modals.find(modal => modal.routeName === currentRoute);
    const stackModal = modal ? modal.stackModal : null;
    console.log('-------------Stack ---------');
    console.log(stackModal);

    console.log('-------------Route ---------');
    console.log(currentRoute);


    return (
        <>
            {stackModal && stackModal.map((bs, index) => <BSheet  key={index} id={bs.id} isAllowClose={bs.isAllowClose} stackOfRoute={modal.routeName} contentView={bs.contentView} data={bs.data} />)}
        </>
    )
}

export default BottomSheet;


