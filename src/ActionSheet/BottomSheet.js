import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BSheet from './BSheet';
// import { getCurrentRouteName } from '../../App';
import { navigationRef } from '../../App';


const BottomSheet = () => {
    const [routeName, setRouteName] = React.useState(null);
    const dispatch = useDispatch();
    const bottomsheet = useSelector(state => state.bottomsheet); 
    console.log('BottomSheet: ', bottomsheet);
    const modals = bottomsheet.modals; 
    const modal = routeName && modals.find(modal => modal.routeName === routeName);
    const stackModal = modal ? modal.stackModal : null
    console.log('-------------Stack ---------');
    console.log(stackModal);

    console.log('-------------Route ---------');
    console.log(routeName);  
    
    useEffect(() => {
        console.log(navigationRef.current.getCurrentRoute().name)
        setRouteName(navigationRef.current.getCurrentRoute().name);
    }, []);

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



