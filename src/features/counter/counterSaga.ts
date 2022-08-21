import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchCount } from './counterAPI';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log:', action);
// }
function* test() {
  yield fetchCount(2); // => return a promise
  //and
  yield call(fetchCount, 2); // => return an effect object
}
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s... ');
  // wait 2s
  yield delay(1000);
  console.log('Waiting done, dispatch increment action');
  // dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log('counter saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
