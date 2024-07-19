/**
 * author : yangbo
 * date : 2023/09/15 09:40:39
 * fileName: index.jsx
 * description : 公有工具包
 **/
import React, { useState, useEffect } from 'react';

function BaseLayer(props) {
    const { children } = props;

    console.log('BaseLayer', props);

    return <div>{children}</div>;
}

export default BaseLayer;
