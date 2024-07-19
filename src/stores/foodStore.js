/**
 * author : yangbo
 * date : 2024/07/11 10:15:36
 * fileName: foodStore.js
 * description :
 **/
import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

export const useFoodStore = create(
    devtools(
        persist(
            (set, get) => ({
                fish: [],
                food: [],
                setFood: food =>
                    set(() => {
                        const newFood = [...new Set([...get().food, food])];

                        return {
                            food: newFood,
                        };
                    }),
                setFish: fish =>
                    set(() => {
                        const newFish = [...new Set([...get().fish, fish])];

                        return {
                            fish: newFish,
                        };
                    }),
            }),
            {
                name: 'food-storage',
                storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);
