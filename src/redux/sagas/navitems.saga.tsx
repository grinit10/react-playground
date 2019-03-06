import { takeEvery, put, call } from 'redux-saga/effects';

import * as navActionCreators from '../actioncreators/navitems.actioncreators';
import { navsActions } from './../navitems.actions';

function* handleNavsLoad() {
    try
    {
        // const res = yield call(carsApi.fetchCars);
        // yield put(navActionCreators.loadnavsSuccess());
    }
    catch(ex)
    {
        yield put(navActionCreators.loadnavsError(ex.response.data)) ;
    }
}

export function* watcherNavItemsLoad() {
    yield takeEvery(navsActions.LOAD_NAVS, handleNavsLoad)
}