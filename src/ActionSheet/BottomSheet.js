import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BSheet from './BSheet';
// import { getCurrentRouteName } from '../../App';
// import { navigationRef } from '../../App';
// import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


const BottomSheet = () => {
    const [routeName, setRouteName] = React.useState(null);
    const dispatch = useDispatch();
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


    // useEffect(() => {
    //     console.log(navigationRef.current.getCurrentRoute().name)
    //     setRouteName(navigationRef.current.getCurrentRoute().name);  
    // }, []);

    return (
        <>
            {stackModal && stackModal.map((bs, index) => <BSheet replace={bs.replace} key={index} id={bs.id} isAllowClose={bs.isAllowClose} stackOfRoute={modal.routeName} contentView={bs.contentView} data={bs.data} />)}
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



