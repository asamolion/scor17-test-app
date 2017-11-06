import { put, takeEvery, all } from 'redux-saga/effects';

// worker saga
export function* processName({ name }) {
  alert(name)
  yield put({ type: 'PROCESS_NAME', name });
}

// watcher saga
export function* watchProcessName() {
  yield* takeEvery('USER_NAME_INPUT', processName);
}

export default function* rootSaga() {
  yield all[watchProcessName()];
}
