import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import searchSlice from '@features/search/search.slice';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function makeStore() {
  return configureStore({
    reducer: {
      search: searchSlice,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
}

const store = makeStore();

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
