/**
 * author : yangbo
 * date : 2024/07/11 16:04:01
 * fileName: index.jsx
 * description :
 **/

import React from 'react';
import { useBeeStore } from '@stores/bee';

function TodoList(props) {
    const name = useBeeStore(state => state.bee.name);
    console.log('TodoList', name);

    function handleClick() {
        console.log('handleClick');
        for (let i = 0; i < 100000; i++) {}
    }

    return <div>{name}</div>;
}

export default TodoList;
