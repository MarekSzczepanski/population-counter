import { configureStore, combineReducers } from '@reduxjs/toolkit';
import step from './reducers/step';
import buttonsLock from './reducers/buttonsLock';
import locationsData from './reducers/locationsData';
import results from './reducers/results';

const rootReducer = combineReducers({
  step,
  buttonsLock,
  locationsData,
  results,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
