/**
 * author : yangbo
 * date : 2024/07/11 13:34:51
 * fileName: immer.js
 * description :
 **/

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import _ from 'lodash';

export const useBeeStore = create(
    devtools(
        immer((set, get) => ({
            bee: {
                name: 'yangbo',
                fruit: 24,
                sex: 'male',
            },
            setBee: async bee => {
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                }).then(() => {
                    set(state => {
                        console.log('setBee start');
                        _.set(state, `bee[${bee[0]}]`, bee[1]);
                    });
                });

                console.log('setBee end');
            },
        })),
    ),
);
