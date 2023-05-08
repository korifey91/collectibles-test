import { takeEvery, call, put } from 'redux-saga/effects';

import axiosInstance, { type AxiosError, type AxiosResponse } from '@/axiosInstance';

import { search } from './search.actions';
import { getSuitesError, getSuitesSuccess } from './search.slice';
import { Suites } from './search.types';

const getAllSuites = () => axiosInstance.get('/suite_years/suites');

function* getSuites() {
  try {
    const response: AxiosResponse<Suites[]> = yield call(getAllSuites);
    yield put(getSuitesSuccess(response.data));
  } catch (error) {
    yield put(getSuitesError((error as AxiosError).message));
  }
}

export default function* searchSaga() {
  yield takeEvery(search.toString(), getSuites);
}
