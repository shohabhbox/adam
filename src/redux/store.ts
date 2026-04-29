import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
};

// Combine reducers
const appReducer = combineReducers({});

// Root reducer with reset logic
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: any,
) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

// ✅ Correct type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
