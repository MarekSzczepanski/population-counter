import { configureStore, combineReducers } from '@reduxjs/toolkit';
import step from './reducers/step';
import buttonsLock from './reducers/buttonsLock';
import dropdownItems from './reducers/dropdownItems';

const rootReducer = combineReducers({
    step,
    buttonsLock,
    dropdownItems,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
