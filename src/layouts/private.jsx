/**
 * author : yangbo
 * date : 2023/09/15 09:40:01
 * fileName: index.jsx
 * description : 私有工具包
 **/
import React from 'react';

function BasePrivateLayer(props) {
    console.log('BasePrivateLayer', props);

    const { children } = props;
    return <div>{children}</div>;
}

export default BasePrivateLayer;
