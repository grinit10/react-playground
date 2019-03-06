import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './reducers/index.reducers';
import  {watcherNavItemsLoad} from './sagas/navitems.saga';

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(watcherNavItemsLoad);
    return store;
}