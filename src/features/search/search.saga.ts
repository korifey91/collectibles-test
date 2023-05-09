import { call, put, takeLeading } from 'redux-saga/effects';

import axiosInstance, { type AxiosError, type AxiosResponse } from '@src/axiosInstance';

import { search } from './search.actions';
import { getSuitesError, getSuitesSuccess } from './search.slice';
import { Suites } from './search.types';

interface SuitesResponse {
  suites: Suites[], meta: { total_cards_count: number }
}

const getAllSuites = () => axiosInstance.get('/suite_years/suites');

function* getSuites() {
  try {
    const response: AxiosResponse<SuitesResponse> = yield call(
      getAllSuites,
    );
    yield put(getSuitesSuccess(response.data.suites));
  } catch (error) {
    yield put(getSuitesError((error as AxiosError).message));
  }
}

export default function* searchSaga() {
  yield takeLeading(search.toString(), getSuites);
}
