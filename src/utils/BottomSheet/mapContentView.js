import React from 'react';
import View1 from '../../components/BottomSheetView/view1';
import View2 from '../../components/BottomSheetView/view2';
import View3 from '../../components/BottomSheetView/view3';
import View4 from '../../components/BottomSheetView/view4';
import View5 from '../../components/BottomSheetView/view5';


import { viewTypes } from './viewTypes';

export const mapContentView = (contentView, data, viewOfRoute, actionSheetRef) => {
    switch (contentView) {
        case viewTypes.VIEW1:
            return <View1 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW2:
            return <View2 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW3:
            return <View3 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW4:
            return <View4 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW5:
            return <View5 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        default:
            break;
    }
}