/**
 * author : yangbo
 * date : 2023/09/14 09:41:35
 * fileName: index.js
 * description :
 **/

import React, { useEffect, useMemo } from 'react';
import { useFoodStore } from '@stores/foodStore';
import { useBeeStore } from '@stores/bee';

let name = 'Alan';

function Template(props) {
    const { food, setFood } = useFoodStore();
    const setBee = useBeeStore(state => state.setBee);

    // 备注会被打到包里么
    console.log('food', food);

    useEffect(() => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        const rotate = function (matrix) {
            const r = matrix.length;
            const c = matrix[0].length;

            for (let i = 0; i < r / 2; i++) {
                for (let j = 0; j < c / 2; j++) {
                    const item = matrix[i][j];

                    matrix[c - i - 1] = matrix[i];
                }
            }
        };

        rotate(matrix);
    }, []);

    function handleClick(item) {
        setFood(item);
        setBee(['fruit', item]);
    }

    const foodList = useMemo(() => {
        const FOODLIST = ['西瓜', '苹果', '香蕉', '梨子', '葡萄'];
        return FOODLIST.map(item => {
            return (
                <button key={item} onClick={handleClick.bind(null, item)}>
                    {item}
                </button>
            );
        });
    }, []);

    return (
        <>
            <div>
                <span>{name}</span>
                {foodList}
            </div>
            <div>这是食物选择</div>
        </>
    );
}

export default Template;
