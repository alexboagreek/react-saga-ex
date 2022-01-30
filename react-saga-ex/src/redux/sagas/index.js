import { take } from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from '../constants';


export function* workerSaga() {

}

export function* watchClickSaga() {
    yield take(INCREASE_COUNT);
    yield take(DECREASE_COUNT);

}
 

export default function* rootSaga() {
    yield watchClickSaga();
}