/**
 * author : yangbo
 * date : 2024/07/11 16:17:14
 * fileName: age.jsx
 * description :
 **/

import React from 'react';
import { useBeeStore } from '@stores/bee';

function Fruit(props) {
    const fruit = useBeeStore(state => state.bee.fruit);

    console.log('Fruit', fruit);

    return <div>{fruit}</div>;
}

export default Fruit;
