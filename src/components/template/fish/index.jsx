/**
 * author : yangbo
 * date : 2024/07/11 10:46:15
 * fileName: index.jsx
 * description :
 **/

import React, { useMemo } from 'react';
import { useFoodStore } from '@stores/foodStore';
import { useBeeStore } from '@stores/bee';

function Fish(props) {
    const setFish = useFoodStore(state => state.setFish);
    const setBee = useBeeStore(state => state.setBee);

    function handleClick(item) {
        setFish(item);
        setBee(['name', item]);
    }

    const fishList = useMemo(() => {
        const FISHLIST = ['金枪鱼', '罗非鱼', '三文鱼', '鲫鱼', '鲤鱼'];
        return FISHLIST.map(item => {
            return (
                <button key={item} onClick={handleClick.bind(null, item)}>
                    {item}
                </button>
            );
        });
    }, [setFish]);

    return (
        <>
            <div>
                <span>Fish</span>
                {fishList}
            </div>
            <div>这是鱼类选择</div>
        </>
    );
}

export default Fish;
