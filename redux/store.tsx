import { configureStore } from '@reduxjs/toolkit';
import collegePredictorReducer from './collegePredictorslice';
import userDetailsReducer from './userDetailsslice';
import premiumDataReducer from './premiumDataslice';
const store = configureStore({
  reducer: {
    collegePredictor: collegePredictorReducer,
    userDetails:userDetailsReducer,
    premiumData:premiumDataReducer,
  },
});

// Extract RootState type for use in selectors
export type RootState = ReturnType<typeof store.getState>;

// Extract AppDispatch type for use in dispatch
export type AppDispatch = typeof store.dispatch;

export default store;