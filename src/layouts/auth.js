/**
 * author : yangbo
 * date : 2023/09/15 09:40:18
 * fileName: auth.js
 * description : 环境工具包
 **/
import React from 'react';

function BaseAuthLayer(props) {
    console.log('BaseAuthLayer', props);

    const { children } = props;
    return <div>{children}</div>;
}

export default BaseAuthLayer;
