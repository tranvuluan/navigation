import React from 'react';
import View1 from '../../components/BottomSheetView/replace/view1';
import View2 from '../../components/BottomSheetView/replace/view2';
import View3 from '../../components/BottomSheetView/replace/view3';
import View4 from '../../components/BottomSheetView/push/view4';
import View5 from '../../components/BottomSheetView/push/view5';
import View6 from '../../components/BottomSheetView/preventclose/view6';
import View7 from '../../components/BottomSheetView/preventclose/view7';
import View8 from '../../components/BottomSheetView/preventclose/view8';
import View9 from '../../components/BottomSheetView/navigate/view9';
import View10 from '../../components/BottomSheetView/navigate/view10';

import { viewTypes } from './viewTypes';
import View11 from '../../components/BottomSheetView/about/view11';


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

        case viewTypes.VIEW6:
            return <View6 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW7:
            return <View7 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW8:
            return <View8 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW9:
            return <View9 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />
        case viewTypes.VIEW10:
            return <View10 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        case viewTypes.VIEW11:
            return <View11 data={data} viewOfRoute={viewOfRoute} actionSheetRef={actionSheetRef} />

        default:
            break;
    }
}