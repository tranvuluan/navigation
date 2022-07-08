import React from 'react';
import { useSelector } from 'react-redux';
import BSheet from './BSheet';

const BottomSheet = () => {
    const bottomsheet = useSelector(state => state.bottomsheet);
    const bsList = bottomsheet.bsList;
    const currentRoute = useSelector(state => state.routeState.currentRoute);
    const BS = bsList.find(bs => bs.routeName === currentRoute);
    const stackBS = BS ? BS.stackBS : null;


    return (
        <>
            {stackBS && stackBS.map((bs, index) => <BSheet key={index} id={bs.id} isAllowClose={bs.isAllowClose} stackOfRoute={BS.routeName} contentView={bs.contentView} data={bs.data} />)}
        </>
    )
}

export default BottomSheet;


