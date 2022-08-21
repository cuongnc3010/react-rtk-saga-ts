import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';
// eslint-disable-next-line require-yield
function* helloSaga() {
  console.log('hello saga');
}
export default function* rootSaga() {
  console.log('root saga');
  yield all([helloSaga(), counterSaga()]);
}
