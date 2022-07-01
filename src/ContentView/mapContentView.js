import React from 'react';
import View1 from "./view1";
import View2 from "./view2";
import View3 from './view3';
import View4 from './view4';
import { viewTypes } from './viewTypes';

export const mapContentView = (contentView, data, viewOfRoute) => {
    switch (contentView) {
        case viewTypes.VIEW1:
            return <View1 data={data} viewOfRoute={viewOfRoute}/>

        case viewTypes.VIEW2:
            return <View2 data={data} viewOfRoute={viewOfRoute}/>

        case viewTypes.VIEW3:
            return <View3 data={data} viewOfRoute={viewOfRoute}/>

        case viewTypes.VIEW4:
            return <View4 data={data} viewOfRoute={viewOfRoute}/>

        default:
            break;
    }
}