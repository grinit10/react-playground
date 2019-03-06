import {combineReducers} from 'redux';

import {navsReducer} from './navitems.reducers';
import {navsErrorReducer} from './error.navitems';

export const rootReducer = combineReducers({
   navItems : navsReducer,
   naverror: navsErrorReducer
})
