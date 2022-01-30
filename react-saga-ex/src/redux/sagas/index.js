import { takeEvery } from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from '../constants';
import { getLatestNews  } from "../../api";


export function* workerSaga() {
    const data = yield getLatestNews();
 
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE_COUNT, workerSaga);
  
}
 

export default function* rootSaga() {
    yield watchClickSaga();
}