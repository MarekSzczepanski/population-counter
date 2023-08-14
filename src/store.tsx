import { configureStore } from '@reduxjs/toolkit';
import step from './reducers/step';

const store = configureStore({
    reducer: {
        step,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
