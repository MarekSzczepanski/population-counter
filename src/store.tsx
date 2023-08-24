import { configureStore, combineReducers } from '@reduxjs/toolkit';
import step from './reducers/step';
import buttonsLock from './reducers/buttonsLock';
import locations from './reducers/locations';

const rootReducer = combineReducers({
  step,
  buttonsLock,
  locations,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
