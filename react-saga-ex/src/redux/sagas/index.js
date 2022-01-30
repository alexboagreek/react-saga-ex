import { takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from '../constants';

const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
})

export function* workerSaga() {
    const count = yield select(({ counter }) => counter.count);
    yield delay(2);
    console.log(`request ${count}`);
 
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, workerSaga);
    // yield take(DECREASE_COUNT);
    yield takeLeading(INCREASE_COUNT, workerSaga);
 
}
 

export default function* rootSaga() {
    yield watchClickSaga();
}