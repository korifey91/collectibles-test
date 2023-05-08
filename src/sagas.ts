import {
  all, call, spawn,
} from 'redux-saga/effects';

import searchSaga from '@/features/search/search.saga';

function* rootSaga() {
  const sagas = [
    searchSaga,
  ];

  // see https://redux-saga.js.org/docs/advanced/RootSaga#keeping-everything-alive
  yield all(sagas.map((saga) => spawn(function* runner() {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.error(e);
      }
    }
  })));
}

export default rootSaga;
