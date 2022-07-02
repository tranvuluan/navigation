import React from 'react';
import { useSelector } from 'react-redux';
import BSheet from './BSheet';

const BottomSheet = () => {
    const bottomsheet = useSelector(state => state.bottomsheet);
    const modals = bottomsheet.modals;
    const currentRoute = useSelector(state => state.routeState.currentRoute);
    const modal = modals.find(modal => modal.routeName === currentRoute);
    const stackModal = modal ? modal.stackModal : null;
    console.log('-------------BottomSheet ---------');
    console.log(bottomsheet);
    console.log('-------------Route ---------');
    console.log(currentRoute);
    console.log('-------------Stack ---------');
    console.log(stackModal);




    return (
        <>
            {stackModal && stackModal.map((bs, index) => <BSheet  key={index} id={bs.id} isAllowClose={bs.isAllowClose} stackOfRoute={modal.routeName} contentView={bs.contentView} data={bs.data} />)}
        </>
    )
}

export default BottomSheet;


